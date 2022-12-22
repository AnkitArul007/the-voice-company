import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Copywriting from "../components/Copywriting";

export default function Classes() {
  return (
    <Layout>
      <Hero className="left-aligned-hero">
        <div>
          <p>Pick a live class that will help you &gt; Select</p>
          <p>from the next available session &gt; Pay</p>
          <p>online to grab a confirmed seat &gt; Join</p>
        </div>
      </Hero>
      <Copywriting className="coral-bg">
        <h2>Basics of copywriting</h2>
        <div>
          <span>B</span>
        </div>
        <h3>
          You’re new to the game, and you want to find out what it takes to
          crack it.
          <br />
          This is for you.
        </h3>
      </Copywriting>
      <Copywriting className="black-bg">
        <h2>Print copywriting</h2>
        <div>
          <span>P</span>
        </div>
        <h3>
          You’re new to the game, and you want to find out what it takes to
          crack it.
          <br />
          This is for you.
        </h3>
      </Copywriting>
    </Layout>
  );
}
