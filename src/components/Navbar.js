import React from "react";
import { Link } from "gatsby";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src="/images/logo/voicecompanylogo-w.png" alt="logo" />
        </Link>
      </div>
      <div className="navbarLinksWrapper">
        <div>
          <Link to="/classes" style={{ textDecoration: "none" }}>
            <span>Master</span>
            &nbsp;
            <span className="deep-red-text">Classes</span>
          </Link>
        </div>
        <div>
          <Link to="/internship">
            <span>the copy</span>
            &nbsp;
            <span className="coral-text">Internship</span>
          </Link>
        </div>
        <div>
          <Link to="/review">
            <span>portfolio</span>
            &nbsp;
            <span className="aqua-text">Review</span>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <span>About</span>
            &nbsp;
            <span className="light-red-text">Bo</span>
          </Link>
        </div>
      </div>
      <div>
        <div className="telegramIconCont">
          <a href="#">
            <img src="/images/icons/Vector.svg" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}
