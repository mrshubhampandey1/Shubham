import React from "react";
import bosch from "../assets/bosch.webp";
import tvs from "../assets/tvs.webp";

function Experience() {
  return (
    <div className="ExpContainer" id="experience">
      <div className="myTitle">Professional Experience</div>
      <div className="ExpSubContainer">
        <div className="expChild">
          <img src={bosch} alt="bosch" loading="lazy" className="expImg" />
          <div>
            <p>
              <strong>Designation : </strong>
              Associate Software Engineer
            </p>
            <p>
              <strong>Location : </strong>
              Bengaluru, Karanataka, India
            </p>
            <p>
              <strong>Duration : </strong>
              October 2023 - September 2025
            </p>
            <p>
              <strong>LinkedIn : </strong>
              <a href="https://www.linkedin.com/company/bosch">Bosch </a>
            </p>
          </div>
        </div>
        <div className="expChild">
          <img
            src={tvs}
            alt="tvs"
            loading="lazy"
            className="expImg expChildTVS"
          />
          <div>
            <p>
              <strong>Designation : </strong>
              Software Developer
            </p>
            <p>
              <strong>Location : </strong>
              Guwahati, Assam, India
            </p>
            <p>
              <strong>Duration : </strong>
              September 2025 - Present
            </p>
            <p>
              <strong>LinkedIn : </strong>
              <a href="https://in.linkedin.com/company/tvscredit">TVS Credit</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
