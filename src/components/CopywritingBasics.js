import React, { useRef } from "react";
import "../styles/copywritingBasics.scss";
import { HiOutlineBadgeCheck } from "@react-icons/all-files/hi/HiOutlineBadgeCheck";
import { FiClock } from "@react-icons/all-files/fi/FiClock";
import { HiOutlineStar } from "@react-icons/all-files/hi/HiOutlineStar";
import { AiOutlineYoutube } from "@react-icons/all-files/ai/AiOutlineYoutube";
import { MdDateRange } from "@react-icons/all-files/md/MdDateRange";

function CopywritingBasics() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <section className="copywritingBasicsSection">
        <div className="icon_logo_cont">
          <div className="basicsIcon">
            <p>B</p>
          </div>
          <div className="basicsHeadings">
            <h2 className="headingOne">Basics of</h2>
            <h2 className="headingTwo">copywriting</h2>
          </div>
        </div>

        <div className="verticalLine"></div>

        <div className="internshipIcons">
          <div className="iconsCont">
            <div className="icon">
              <FiClock />
            </div>

            <p className="iconText">60 minute live session</p>
          </div>
          <div className="iconsCont">
            <div className="icon">
              <HiOutlineBadgeCheck />
            </div>

            <p className="iconText">Completion badge</p>
          </div>
          <div className="iconsCont">
            <div className="icon">
              <HiOutlineStar />
            </div>

            <p className="iconText">Linkedin recommendation</p>
          </div>
          <div className="iconsCont">
            <div className="icon">
              <AiOutlineYoutube />
            </div>

            <p className="iconText">Session playback</p>
          </div>
        </div>
      </section>

      {/* date section */}

      <section className="datePickerSection">
        <div className="calenderCont">
          <MdDateRange></MdDateRange>
        </div>
        <h2>
          Pick a
          <label htmlFor="bookingDate" onClick={handleClick}>
            <input
              type="date"
              name="bookingDate"
              id="bookingDate"
              ref={ref}
              min={new Date().toISOString().slice(0, 10)}
            />
            &nbsp;Date&nbsp;
          </label>
          that works for you
        </h2>
      </section>
    </>
  );
}

export default CopywritingBasics;
