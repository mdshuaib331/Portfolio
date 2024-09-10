import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/images.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} className="imglogobottom" alt="" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Shoaib. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
