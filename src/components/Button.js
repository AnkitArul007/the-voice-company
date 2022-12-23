import React from "react";
import "../styles/btn.scss";
import { Link } from "gatsby";

function Button({ textColor, btnBgColor, btnTextColor, btnText }) {
  return (
    <Link to="/payment">
      <button type="button" className={`btn ${btnTextColor} ${btnBgColor}`}>
        {btnText}
      </button>
    </Link>
  );
}

export default Button;
