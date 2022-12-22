import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <div className="index-section-1-container">
          <p>
            Nobody’s born a copywriter. It takes grit, work and practice.
            (Masterclasses and internships help).
          </p>
          <div>
            <img
              src="/images/icons/Vectorarrow.svg"
              alt=""
              width="50px"
              height="25px"
            />
          </div>
        </div>
      </Hero>
      {/* section 2 */}
      <section className="section-wrapper index-section-2-Wrapper">
        <div className="Text-SpiralArrow-Wrapper">
          <div>
            <p>This is how the</p>
            <div className="spiralCont">
              <img src="/images/icons/SpiralArrow.svg" alt="" />
            </div>
          </div>
          <p>sessions usually go</p>
        </div>
        <div>
          <img src="/images/icons/monitor.svg" alt="" />
        </div>
      </section>
      {/* section 3 */}
      <section className="section-wrapper index-section-3-Wrapper">
        <p>
          287 people have attended the Copy Internship. Here's what some of them
          had to say.
        </p>
        <div className="banner-wrapper">
          <span>‘Sucks that it’s over.’</span>
        </div>
      </section>
      {/* footer section  */}
      <Footer />
    </Layout>
  );
}
