import React from "react";
import "./Download.css";

function Download() {
  return (
    <div className="download">
      <p className="download_title">Download</p>
      <h2 className="download_head">
        Downlod GXGEY <br /> Google play & App store{" "}
      </h2>
      <div className="img_div">
        <div className="left_img_div">
          <div>User app</div>
          <img src="/Assets/1 325.png" alt="mobile" className="img" />
        </div>
        <div className="right_img_div">
          <div>Provider app</div>
          <img src="/Assets/1 326.png" alt="mobile" className="img" />
        </div>
      </div>
      <div className="div_social">
        <div className="social_div">
          <img className="googlePlay1" src="/Assets/google_play.png" />
          <img className="appstore1" src="/Assets/app_store.png" />
        </div>
        <div className="social_div">
          <img className="googlePlay1" src="/Assets/google_play.png" />
          <img className="appstore1" src="/Assets/app_store.png" />
        </div>
      </div>
    </div>
  );
}

export default Download;
