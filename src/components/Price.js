import React from "react";

export default function Price({ children, className }) {
  return <div className={`priceBtn ${className}`}>{children}</div>;
}
