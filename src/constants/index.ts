import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import SunstonePickleball from "../assets/projects/SunstonePickleball.png";
import arthrexmysurgery from "../assets/arthrexmysurgery.png";
import pythonCert from "../assets/pythonCert.png";
import openSSF from "../assets/OpenSSF.png";

// Type Definitions
interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

interface Project {
  title: string;
  demo: string;
  github: string;
  description: string;
  skills: string[];
  image: string;
}

interface ContactInfo {
  address: string;
  phoneNo: string;
  email: string;
}

interface Certifications {
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  url: string;
  image: string;
  github: string;
  date: string;
}

// Hero Section Content
export const HERO_CONTENT: string = `I am a passionate frontend developer with a strong focus on crafting dynamic and scalable web applications. With over a year of hands-on experience, I specialize in React, Tailwind CSS, JavaScript, and modern frameworks like Next.js, Node.js, Express, and MongoDB. I am dedicated to building intuitive and user-centered websites that are functional, visually appealing, and optimized for seamless user experiences and performance.`;

// About Section Texts
export const ABOUT_TEXT: string = `I am a dedicated frontend developer with a passion for building user-friendly, performant, and visually appealing web applications. With over a year of experience, I have worked extensively with React, Next.js, Tailwind CSS, React-Router, and Framer Motion, focusing on creating scalable, responsive, and engaging user experiences. My journey in web development started with a curiosity for how things work, which has grown into a career where I continuously learn, adapt, and tackle new challenges. I thrive in collaborative environments, enjoy problem-solving, and take pride in delivering high-quality solutions.`;

export const ABOUT_TEXT1: string = `I am currently a sophomore at Florida Gulf Coast University, pursuing a B.S. in Software Engineering. My coursework includes Data Structures & Algorithms, Calculus III, Discrete Mathematics, and Computer Security, giving me a strong foundation in both theoretical and practical aspects of computing. Beyond academics, I am actively building projects, solving LeetCode problems, and expanding my knowledge independently. Outside of coding, I enjoy playing the piano, exploring emerging technologies, and contributing to open-source projects.`;

// Experiences Data
export const EXPERIENCES: Experience[] = [
  {
    year: "2024 - Present",
    role: "Student Math Tutor",
    company: "FGCU",
    description: `Helped students in math topics ranging from Algebra to Calculus III. Worked with students on homework, classwork, and various topics by providing guidance and clarification as needed.`,
    skills: ["Problem Solving", "Communication", "Math"]
  },
  {
    year: "2024 - Present",
    role: "Research Assistant",
    company: "FGCU",
    description: `Led an Unreal Engine simulation project that models a Water-Energy-Food (WEF) system. Using C++ and Unreal's blueprint system, I tested, fixed bugs, and added new features to enhance the simulation's user experience.`,
    skills: ["Unreal Engine", "C++", "Virtual Reality"]
  },
  {
    year: "2023 - 2024",
    role: "Back of House Worker",
    company: "Chick-fil-A",
    description: `Worked in the Back of House at Chick-fil-A, preparing food and coordinating with kitchen and front-of-house staff to ensure efficient service.`,
    skills: ["Service", "Teamwork", "Communication"]
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Arthrex MySurgery",
    demo: "https://www.arthrexmysurgery.com",
    github: "https://github.com/JacksonBryantFGCU/arthrex-mysurgeryfrontend",
    description: "A website designed for patients to connect with their surgeons and access pre/post-surgery checklists and information.",
    skills: ["React", "React-Router-DOM"],
    image: arthrexmysurgery,
  },
  {
    title: "Sunstone Pickleball Website",
    demo: "https://www.sunstonepickleball.com",
    github: "https://github.com/JacksonBryantFGCU/SunstonePickleballClub",
    description: "A website for the Sunstone Pickleball Club, featuring a gallery carousel, player profile cards, events calendar, and a contact section.",
    skills: ["React", "Tailwind CSS", "React-Router", "Framer Motion"],
    image: SunstonePickleball,
  },
  {
    title: "Portfolio Website",
    demo: "https://jacksonbryantportfolio.netlify.app/",
    github: "https://github.com/JacksonBryantFGCU/portfolio-typescript",
    description: "A personal portfolio website showcasing projects, skills, and contact information. Utilizes Framer Motion for section animations.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: project2,
  }
  // {
  //   title: "Upgrades by Taylor Website",
  //   demo: "https://linkedin.com",
  //   github: "https://github.com/JacksonBryantFGCU/UpgradesbyTaylor",
  //   description: "A fully functional web application with an image gallery, contact form, and testimonial carousel.",
  //   skills: ["HTML", "CSS", "JavaScript", "FormSpree"],
  //   image: project1,
  // }
];

// Certifications Data
export const CERTIFICATIONS: Certifications[] = [
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    description: "Completed the Scientific Computing with Python certification, demonstrating proficiency in Python programming and data analysis.",
    skills: ["Python", "Data Analysis", "Scientific Computing"],
    url: "https://www.freecodecamp.org/certification/JacksonBryantFGCU/scientific-computing-with-python-v7",
    image: pythonCert,
    github: "https://github.com/JacksonBryantFGCU/certifications",
    date: "04-06-2025"
  },
  {
    title: "OpenSSF Scorecard Certification",
    issuer: "The Linux Foundation",
    description: "Completed the OpenSSF Scorecard certification, demonstrating knowledge of open-source security best practices and tools.",
    skills: ["Open Source", "Security", "Best Practices"],
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c66a3371-36ba-4d2a-aac6-dc84958067fb-jackson-l-a652b2f3-a2e9-47ab-9614-a0e97f8e9d72-certificate.pdf",
    image: openSSF,
    github: "https://github.com/JacksonBryantFGCU/certifications",
    date: "03-22-2025"
  },
]
// Contact Information
export const CONTACT: ContactInfo = {
  address: "Wellen Park, Venice, FL 34293",
  phoneNo: "+1 443 994 5589",
  email: "jackbryant5589@gmail.com"
};