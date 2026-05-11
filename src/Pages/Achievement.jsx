import React from "react";
import awards from "../assets/awards_desktop.webp";
import awards_mob from "../assets/awards_mobile.webp";

function Achievement() {
  return (
    <div className="certDiv achvDiv" id="achievement">
      <div className="myTitle">Achievements</div>
      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={awards_mob} />
          <img className="agileImg" src={awards} alt="agile certificate" />
        </picture>
      </div>
    </div>
  );
}

export default Achievement;
