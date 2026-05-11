import React from "react";
import Agile from "../assets/agile_certificates.webp";
import AgileMobImg from "../assets/agile_certificates_mobile.webp";

function Certification() {
  return (
    <div className="certDiv" id="certification">
      <div className="myTitle">Certifications</div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={AgileMobImg} />
          <img className="agileImg" src={Agile} alt="agile certificate" />
        </picture>
      </div>
    </div>
  );
}

export default Certification;
