import React from "react";
import "../styles/cohort.scss";

function Cohort({ date, seat }) {
  return (
    <section className="cohortSection section-wrapper">
      <div className="cohortNumCont">
        <span>{seat}</span>
      </div>
      <div className="cohortHeadlinesCont">
        <h2 className="cohortHeadline">Next cohort starts on</h2>
        <h2 className="cohortHeadlineSecond">{date}</h2>
        <h2 className="cohortHeadlineThird">{seat} seats left</h2>
      </div>
    </section>
  );
}

export default Cohort;
