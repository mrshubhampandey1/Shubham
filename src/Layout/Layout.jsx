import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Footer from "../Components/Footer";
import Chat from "../assets/chat.mp4";
import { BsChatSquareTextFill } from "react-icons/bs";
import { toast } from "react-toastify";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Certification from "../Pages/Certification";
import Achievement from "../Pages/Achievement";

function Layout() {
  return (
    <div className="appContainer">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certification />
      <Achievement />
      <Footer />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="chatter"
        onClick={() =>
          toast.info(
            "This feature is currently under development. Our bot is powered by GenAI, and this functionality will be available soon",
            { theme: "dark" },
          )
        }
      >
        <source src={Chat} type="video/mp4" />
      </video>
      {/* <img src={chatter} loading="lazy" alt="chatter" className="chatter" /> */}
    </div>
  );
}

export default React.memo(Layout);
