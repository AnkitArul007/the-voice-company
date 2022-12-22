import React from 'react';
import "../styles/cohort.scss";

function Cohort() {
  return (
    <section className="cohortSection">
        <div className="cohortNumCont">

        </div>
        <div className="cohortHeadlinesCont">
            <h2 className="cohortHeadline">
                Next cohort starts on 
            </h2>
            <h2 className='cohortHeadlineSecond'> 15 Dec 2022.</h2>
            <h2 className='cohortHeadlineThird'>
                5 seats left
            </h2>
        </div>
    </section>
  )
}

export default Cohort;