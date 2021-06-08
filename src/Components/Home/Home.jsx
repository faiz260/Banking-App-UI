import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="left">
        <img src="/Assets/title.png" className="title_vector" alt="vector" />
        <h2 className="punch_line">Make all your transfer easily, safety</h2>
        <p className="home_text">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the{" "}
        </p>
        <div>
          <img className="appstore" src="/Assets/app_store.png" />
          <img className="googlePlay" src="/Assets/google_play.png" />
        </div>
      </div>
      <div className="right">
        {/* Navbar */}
        <div className="navbar">
          <ul className="nav_ul">
            <li className="nav_link">
              <a href="">About</a>
            </li>
            <li className="nav_link">
              <a href="">features</a>
            </li>
            <li className="nav_link">
              <div class="dropdown">
                <button className="dropbtn">
                  English{" "}
                  <img src="/Assets/arrow.png" className="down_arrow"></img>{" "}
                </button>
                <div class="dropdown-content">
                  {/* <a href="">Arabic</a> */}
                </div>
              </div>
            </li>
            <li className="nav_link">
              <div className="nav_link_span">
                <a href="">Download</a>{" "}
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Picture */}
        <img src="/Assets/mainImg.png" alt="mobile" className="mobile_img" />
      </div>
    </div>
  );
}

export default Home;
