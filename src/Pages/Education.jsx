import React from "react";
import LPU from "../assets/LPU.webp";

function Education() {
  return (
    <div className="EducationContainer aboutContainer" id="education">
      <div className="aboutSubContainer2">
        <img className="aboutImg" src={LPU} alt="About Image" loading="lazy" />
      </div>
      <div className="aboutSubContainer1">
        <div className="myTitle">Education</div>
        <div>
          <p>
            <strong>University : </strong>
            Lovely Professional University, Phagwara, Punjab, India
          </p>
          <p>
            <strong>Degree : </strong>
            Bachelor of Technology (B.Tech)
          </p>
          <p>
            <strong>Major : </strong>
            Computer Science and Engineering (CSE)
          </p>
          <p>
            <strong>Grade : </strong>
            80.10%
          </p>
          <p>
            <strong>Duration : </strong>
            July 2019 - June 2023
          </p>
          <p>
            <strong>LinkedIn : </strong>
            <a href="https://www.linkedin.com/school/lovely-professional-university/posts/?feedView=all">
              Lovely Professional University
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
