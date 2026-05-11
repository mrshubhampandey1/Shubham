import React from "react";
import skills from "../assets/Skills.webp";

function Skills() {
  /*
Frontend Technologies: React.js, Redux, Redux
Toolkit, Context API, JavaScript (ES6+), HTML5,
CSS3
UI/UX AND styling: Tailwind CSS, Bootstrap,
Responsive Design, Cross-Browser Compatibility
Tools and Libraries: React Router, Axios, Git,
GitHub, NPM, Vite, Babel
Core Concepts: Component-Based Architecture,
State Management, REST API Integration,
Asynchronous Programming, Performance
Optimization
  */
  return (
    <div className="skillContainer" id="skills">
      <div className="myTitle">Skills</div>
      <img className="skillImg" src={skills} alt="skills" loading="lazy" />
    </div>
  );
}

export default Skills;
