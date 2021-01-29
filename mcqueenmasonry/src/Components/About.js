import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const linkedInSquare = <FontAwesomeIcon icon={faLinkedin} size="3x" />;
  const emailSquare = <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" />;

  return (
    <section id="about" className="about-section">
      <div className="about-main-text">
        <h1 className="about-text">
         
          About McQueen Masonry
        </h1>

        <div className="icon-flex">
       
          
        </div>
      </div>
      
      </section>
  );
}

export default About;