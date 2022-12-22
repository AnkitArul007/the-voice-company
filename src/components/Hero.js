import React from "react";

export default function Hero({ children, className }) {
  return (
    <section className={`section-wrapper hero-section ${className}`}>
      {children}
    </section>
  );
}
