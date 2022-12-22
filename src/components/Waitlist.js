import React from "react";
import Price from "./Price";
import Button from "./Button";
export default function Waitlist({
  contColor,
  priceColor,
  btnTextColor,
  btnBgColor,
}) {
  return (
    <section className={`${contColor} price-wrapper`}>
      <div>
        <Price className={priceColor}>
          <p>Join the waitlist</p>
        </Price>
      </div>
      <div>
        <Button
          btnTextColor={btnTextColor}
          btnBgColor={btnBgColor}
          btnText="<email address>"
        />
      </div>
    </section>
  );
}
