import React from "react";
import "../styles/btn.scss";

function Button({ textColor, btnBgColor, btnTextColor, btnText }) {
  return (
    <button type="button" className={`btn ${btnTextColor} ${btnBgColor}`}>
      {btnText}
    </button>
  );
}

export default Button;
