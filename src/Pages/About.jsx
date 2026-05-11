import React from "react";
import SAbout from "../assets/About_img.webp";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutSubContainer1">
        <div className="myTitle">About Us</div>
        <p>
          Hi, I'm Shubham Pandey, a passionate Frontend Developer with over
          <strong> 2+ years</strong> of professional experience crafting
          scalable, responsive, and high-performance web applications. I
          specialize in
          <strong>
            React.js, Redux Toolkit, Tailwind CSS, and modern JavaScript (ES6+)
          </strong>
          , with a strong focus on building clean, reusable UI components and
          seamless user experiences. Throughout my career, I've had the
          privilege of contributing to global product rollouts at Bosch across
          international markets including
          <strong>Singapore, Philippines, and Indonesia,</strong>
          and I currently serve as a Software Developer at TVS Credit Services,
          where I build frontend solutions that impact thousands of customers
          daily. I thrive in Agile environments, collaborating closely with
          designers, product owners, and backend engineers to deliver features
          that are both technically sound and user-centric. Beyond development,
          I take pride in mentoring fellow engineers and sharing knowledge
          within my team. My work has been recognized with multiple awards
          including the
          <strong>
            Bosch Standout Performer Award, Bravo Award, and Best Tyro Award
          </strong>
          — reflections of my commitment to quality, collaboration, and
          continuous growth. I hold a B.Tech in Computer Science and Engineering
          from Lovely Professional University with a grade of 80.10%.
        </p>
      </div>
      <div className="aboutSubContainer2">
        <img
          className="aboutImg"
          src={SAbout}
          alt="About Image"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default React.memo(About);
