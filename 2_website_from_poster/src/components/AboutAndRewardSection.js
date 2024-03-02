import React from "react";
import trophy from "../assets/trophy-image.png";
import recognitionMoment from "../assets/recognition-moment.png";

const AboutAndRewardSection = () => {
  return (
    <div className="about-and-reward">
      <img src={trophy} alt="trophy" id="trophy-image" />
      <div className="conservation-reward">
        <h4 className="text">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul>
          <li className="text">
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li className="text">
            C.R.I. is the highest contributor in the country for the project of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img
          src={recognitionMoment}
          alt="recognition-moment"
          id="recognition-moment-image"
        />
        <p className="text">
          Government of India has awarded the
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default AboutAndRewardSection;
