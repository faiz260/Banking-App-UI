import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="features">
      <p className="features_title">features</p>
      <h2 className="features_head">
        All the information that makes it easy for you <br /> Your transactions{" "}
      </h2>
      <div>
        <div className="features_button">features</div>
      </div>
      <div className="features_cards">
        <div className="feature_card">
          <img src="/Assets/service_card.png" />
        </div>

        <div className="feature_card">
          <img src="/Assets/contact_card.png" alt="contact_card" />
        </div>

        <div className="feature_card">
          <img src="/Assets/service_card_2.png" alt="send_money" />
        </div>
      </div>
      <div className="features_bottom">
        <img src="/Assets/IBAN_2.png" alt="iban" className="iban_2" />
        <img src="/Assets/IBAN.png" alt="iban" className="iban_1" />
      </div>
    </div>
  );
}

export default Features;
