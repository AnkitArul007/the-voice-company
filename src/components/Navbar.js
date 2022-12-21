import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">
          <img src="/images/logo/voicecompanylogo-w 1.png" alt="logo" />
        </Link>
      </div>
      <div>
        <div>
          <Link to="/classes">
            <span>Master</span>
            <span>Classes</span>
          </Link>
        </div>
        <div>
          <Link to="/internship">
            <span>the copy</span>
            <span>Internship</span>
          </Link>
        </div>
        <div>
          <Link to="/review">
            <span>portfolio</span>
            <span>REview</span>
          </Link>
        </div>
        <div>
          <Link to="/about">
            <span>About</span>
            <span>Bo</span>
          </Link>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
