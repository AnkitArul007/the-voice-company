import React from 'react';
import "../styles/copywritingBasics.scss";
import {HiOutlineBadgeCheck} from "@react-icons/all-files/hi/HiOutlineBadgeCheck";


function CopywritingBasics() {
  return (
    <section className="copywritingBasicsSection">
        <div className='icon_logo_cont'>
            <div className="basicsIcon">

            </div>
            <div className="basicsHeadings">
                <h2 className="headingOne">
                    Basics of
                </h2>
                <h2 className="headingTwo">
                    copywriting
                </h2>
            </div>
        </div>

        <div className='verticalLine'></div>

        <div className='internshipIcons'>
            <div className="iconsCont">
                <div className="icon">
                    <HiOutlineBadgeCheck/>
                </div>

                <p className="iconText">
                    60 minute live session
                </p>
            </div>
            <div className="iconsCont">
            <div className="icon">
                    <HiOutlineBadgeCheck/>
                </div>

                <p className="iconText">
                    60 minute live session
                </p>
            </div>
            <div className="iconsCont">
            <div className="icon">
                    <HiOutlineBadgeCheck/>
                </div>

                <p className="iconText">
                    60 minute live session
                </p>
            </div>
            <div className="iconsCont">
            <div className="icon">
                    <HiOutlineBadgeCheck/>
                </div>

                <p className="iconText">
                    60 minute live session
                </p>
            </div>
        </div>
    </section>
  )
}

export default CopywritingBasics;