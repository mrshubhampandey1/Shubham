import React from "react";
import Shubham from "../assets/Shubham_img3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  useGSAP(() => {
    gsap.from(".myTitle", {
      y: 180,
      duration: 2,
      opacity: 1,
    });
    gsap.from(".paramain", {
      y: 180,
      duration: 2,
      // delay: 1,
      opacity: 1,
      rotate: 720,
    });
  });
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
        <div className="paramain">Frontend Developer at TVS | Ex-Bosch</div>
      </div>
    </div>
  );
}

export default React.memo(Home);
