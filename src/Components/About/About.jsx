import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about">
        <p className="about_title">About</p>
        <h2 className="about_head">
          It is a banking application that provides all users
        </h2>
        <p className="about_text">
          with families - individuals - businessmen <br /> Easily banking and
          saving accounts from one place online
        </p>
        <div className="card_div">
          <div className="card">
            <img src="/Assets/transfer 1.png" alt="alt" />
            <p className="card_head">easy transfer</p>
            <p className="card_text">
              {" "}
              is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="card">
            <img
              className="card_hand"
              src="/Assets/credit-card (3) 1.png"
              alt="card_hand"
            />
            <p className="card_head"> A multi-feature</p>
            <p className="card_text">
              {" "}
              is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
