# Portfolio Backend API

This is a simple Express.js API that handles form submissions from the portfolio website and sends emails to the specified email address (pcimarustitutoring@gmail.com).

## Setup Instructions

### 1. Install Dependencies

```bash
cd api
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `api` directory with the following content (based on the `.env.example` file):

```env
EMAIL_USER=pcimarustitutoring@gmail.com
EMAIL_PASSWORD=your_app_password_here
PORT=3001
NODE_ENV=development
```

**Important Note About Email Password:**
For Gmail, you need to use an "App Password" instead of your regular Gmail password. To generate an App Password:

1. Enable 2-Step Verification on your Google Account
2. Go to your Google Account > Security > App Passwords
3. Generate a new App Password for "Mail" and "Other (Custom name)"
4. Use that 16-character password in your .env file

### 3. Start the Server

```bash
npm start
```

The server will run on port 3001 by default.

## Deployment Options

### Option 1: Deploy with Vercel

This API can be deployed to Vercel as a serverless function.

1. Create a `vercel.json` file in the project root with:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/send-email.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/send-email",
      "dest": "/api/send-email.js"
    }
  ]
}
```

2. Deploy with Vercel CLI or GitHub integration

### Option 2: Deploy with Netlify

You can deploy as a Netlify function by moving the code to a `netlify/functions` directory and adapting it to the Netlify functions format.

## Modifying the Frontend

After deploying the backend, update the endpoint URL in the Contact component to point to your deployed API.

```typescript
// Change from
const response = await fetch('http://localhost:3001/api/send-email', {

// To
const response = await fetch('https://your-api-url.com/api/send-email', {
```
