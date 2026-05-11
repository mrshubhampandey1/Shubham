import React from "react";
import Shubham from "../assets/Shubham_img3.webp";

function Home() {
  return (
    <div id="home" className="homeContainer">
      <div className="candidate candidateProfile">
        <img
          className="candidatePicture"
          src={Shubham}
          // fetchPriority="high"
          // loading="eager"
          alt="candidatePicture"
        />
      </div>
      <div className="candidate candidateShortSummary">
        <div className="myTitle">Shubham Pandey</div>
        <div>Frontend Developer at TVS | Ex-Bosch</div>
      </div>
    </div>
  );
}

export default React.memo(Home);
