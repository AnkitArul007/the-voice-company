import React from "react";
import Price from "./Price";
import Button from "./Button";

export default function PriceCont({
  contColor,
  priceColor,
  btnTextColor,
  btnBgColor,
}) {
  return (
    <section className={`${contColor} price-wrapper`}>
      <div>
        <Price className={priceColor}>
          <h2>INR 999</h2>
        </Price>
      </div>
      <div>
        <Button
          btnTextColor={btnTextColor}
          btnBgColor={btnBgColor}
          btnText="Pay now"
        />
      </div>
    </section>
  );
}
