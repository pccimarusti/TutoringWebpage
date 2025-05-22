// api/send-email.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configure CORS to allow requests from your GitHub Pages domain
const allowedOrigins = [
  'https://pccimarusti.github.io',
  'http://localhost:3000',
  'http://localhost:5173'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'pcimarustitutoring@gmail.com',
    pass: process.env.EMAIL_PASSWORD, // You'll need to set this in your environment variables
  },
});

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://pccimarusti.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message, preferredDate, preferredTime } = req.body;

    // Validate required fields
    if (!name || !email || !subject) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Preferred Date: ${preferredDate || 'Not specified'}
        Preferred Time: ${preferredTime || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// For serverless deployment
module.exports = handler;
