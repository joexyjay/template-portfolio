import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "ADIRE",
      desc: "I collaborated with a dedicated team on the development of 'ADIRE,' an innovative assistant for tailors. It simplifies customer data management, materials tracking, and payment processing, addressing the challenges of manual and disorganized operations in the tailoring industry.",
      liveLink: "https://adire1.vercel.app",
      githubLink: "https://github.com/",
      techs: ["Node", "React", "Chart.JS", "TypeScript", "MongoDB", "Axios", "ExpressJS"],
      isOpenSource: false,
    },
    {
      name: "FullStack Authentication",
      desc: "Developed a secure full-stack authentication application using React, Redux, and MongoDb, featuring user authentication, efficient state management, robust profile pages, dynamic user profile management, and CRUD operations.",
      liveLink: "https://mern-app-7syc.onrender.com/",
      githubLink: "https://github.com/joexyjay/mern-app.git",
      techs: ["React", "Node", "MongoDB", "Firebase", "Redux Toolkit", "Tailwind", "TypeScript"],
      isOpenSource: false,
    },
    {
      name: "Monie-Paddy",
      desc: "I collaborated with a dedicated team on the development of Monie-Paddy which is a personal finance management app that allows users to send and receive money and pay bills within the app.",
      liveLink: "https://monie-paddy.vercel.app/",
      githubLink: "https://github.com/joexyjay/Monie-Paddy.git",
      techs: ["React", "Node", "MongoDB", "CI/CD", "Bootstrap", "TypeScript"],
      isOpenSource: false,
    },
    {
      name: "Hospital Database Management",
      desc: "Designed and developed a database management system for a hospital. Developed modules handling doctors and patients records. Ensure data integrity, security and optimal performance.",
      liveLink: "",
      githubLink: "https://github.com/joexyjay/Monie-Paddy.git",
      techs: ["Express", "TypeScript", "Node", "MongoDB", "EJS", "Bootstrap"],
      isOpenSource: false,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
