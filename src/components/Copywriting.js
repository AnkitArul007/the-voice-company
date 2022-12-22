import React from "react";

export default function Copywriting({ children, className }) {
  return (
    <section className={`section-wrapper copywriting-section ${className}`}>
      <div>{children[0]}</div>
      <div>
        <div>{children[1]}</div>
        <div>{children[2]}</div>
      </div>
    </section>
  );
}
