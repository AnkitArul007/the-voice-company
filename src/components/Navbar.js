import React from "react";
import { Link } from "gatsby";
export default function Navbar() {
  return (
    <nav>
      <div></div>
      <div>
        <div>
          <Link to="/classes"></Link>
        </div>
        <div>
          <Link to="/internship"></Link>
        </div>
        <div>
          <Link to="/review"></Link>
        </div>
        <div>
          <Link to="/about"></Link>
        </div>
      </div>
      <div></div>
    </nav>
  );
}
