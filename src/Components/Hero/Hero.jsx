import React from "react";
import "./Hero.css";
import profile_img from "../../assets/img3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm MD Shuaib,</span> frontend Developer based in INDIA
      </h1>
      <p>
        I am a passionate and dedicated frontend developer with a strong
        foundation in HTML, CSS, JavaScript and frameworks like React.js. Eager to bring my skills to
        life, I specialize in creating responsive and visually appealing web
        interfaces.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a
          href="https://aqua-caroline-65.tiiny.site/"
          className="no-style-link"
        >
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;


