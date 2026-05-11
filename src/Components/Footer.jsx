import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Penguin from "../assets/penguin.mp4";
import climat from "../assets/climat.mp4";
import { toast } from "react-toastify";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footersubcontainer footersubcontainerL">
        <video autoPlay loop muted playsInline className="climateImg">
          <source src={climat} type="video/mp4" />
        </video>

        <center>
          <h3>In memory of our fearless ⚔ soldiers </h3>
        </center>
        <br />
      </div>
      <div className="footersubcontainer">
        <div className="footersubcontainerR1">
          <a href="tel:+917236019575" target="_blank">
            <BsFillTelephoneInboundFill className="logo" />
          </a>
          <a
            href="mailto:pandeyshubham182000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="logo" />
          </a>
          <a href="https://www.linkedin.com/in/mrshubhampandey" target="_blank">
            <FaLinkedinIn className="logo" />
          </a>

          <RiTwitterXFill
            className="logo"
            onClick={() =>
              toast.info("😔 Have no active Twitter ID", { theme: "dark" })
            }
          />
          <FaFacebookF
            className="logo"
            onClick={() =>
              toast.info("😔 Have no active Facebook ID", { theme: "dark" })
            }
          />
          <FaInstagramSquare
            className="logo"
            onClick={() =>
              toast.info("😔 Have no active Insta ID", { theme: "dark" })
            }
          />
        </div>
        <div className="footersubcontainerR2">
          <video autoPlay loop muted playsInline className="penguinImg">
            <source src={Penguin} type="video/mp4" />
          </video>
          <p>
            <strong>Meet us @ Gorakhpur, Uttar Pradesh, India - 273212</strong>
            <iframe
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1778491819388!5m2!1sen!2sin!6m8!1m7!1suhBQJG5bbNSYaRV03-VGTw!2m2!1d26.72944924600833!2d83.37957078858064!3f251.71089!4f0!5f0.7820865974627469"
              className="map"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </p>
        </div>
        <div className="footersubcontainerR3">
          <span>+91-7236019575 </span>
          <span>pandeyshubham182000@gmail.com </span>
          <p>&copy; | SHUBHAM PANDEY</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
