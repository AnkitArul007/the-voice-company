import * as React from "react";
import Layout from "../components/Layout";
import CopywritingBasics from "../components/CopywritingBasics";
import PriceCont from "../components/PriceCont";

export default function Review() {
  return (
    <Layout>
      <CopywritingBasics></CopywritingBasics>
      <PriceCont
        priceColor="black-text"
        btnTextColor="white-text"
        btnBgColor="aqua-bg"
        price="799"
      />
    </Layout>
  );
}
