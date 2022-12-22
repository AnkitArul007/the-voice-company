import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Cohort from "../components/Cohort";
import Hero from "../components/Hero";
import PriceCont from "../components/PriceCont";
import Waitlist from "../components/Waitlist";

export default function Internship() {
  const [seat, setSeat] = useState(0);
  return (
    <Layout>
      <Hero className="left-aligned-hero">
        <div>
          <h1>
            A month long digital internship on advertising copywriting. 50 seats
            per cohort.
          </h1>
        </div>
      </Hero>
      <Cohort date="15 Dec 2022" seat={seat}></Cohort>
      {seat > 0 ? (
        <PriceCont
          priceColor="white-text"
          contColor="black-bg"
          btnTextColor="white-text"
          btnBgColor="aqua-bg"
          price="999"
        />
      ) : (
        <Waitlist
          priceColor="white-text"
          contColor="black-bg"
          btnTextColor="black-text"
        />
      )}
    </Layout>
  );
}
