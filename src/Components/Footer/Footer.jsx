import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_body">
        <div className="div1">
          <div>
            <img
              src="/Assets/footer_title.png"
              className="footer_title_vector"
              alt="vector"
            />
          </div>
          <p>
            English
            <img src="/Assets/arrow.png" className="down_arrow"></img>{" "}
          </p>
        </div>
        <div className="div2">
          <a href="">About GXGEY</a>
          <a href="">Privacy Policy</a>
          <a href="">Become a service provider</a>
        </div>
        <div className="div3">
          <a href="">Help</a>
          <a href="">Contact Us</a>
          <a href=""></a>
        </div>
        {/* <img src="/assets/triangle.png" alt="triangle" className="triangle" /> */}
      </div>
      <img
        src="/Assets/lower_Footer.png"
        className="lower_Footer"
        alt="lower footer"
      />
    </div>
  );
}

export default Footer;
