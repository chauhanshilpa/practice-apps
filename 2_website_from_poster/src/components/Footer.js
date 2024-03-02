import React from "react";
import phoneCallIcon from "../assets/phone-call-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import globeIcon from "../assets/globe-icon.png";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <div className="footer">
      <figure>
        <a
          href="tel:18002001234"
          data-tooltip-id="footer-icon-tooltip"
          data-tooltip-content="Click here!"
        >
          <img src={phoneCallIcon} alt="phone-icon" className="icons" />
        </a>
        <figcaption>Toll free 1800&nbsp;200&nbsp;1234</figcaption>
      </figure>
      <figure>
        <a
          href="https://www.facebook.com/cripumps"
          data-tooltip-id="footer-icon-tooltip"
          data-tooltip-content="Click here!"
        >
          <img src={facebookIcon} alt="facebook-icon" className="icons" />
        </a>
        <figcaption>www.facebook.com/cripumps</figcaption>
      </figure>
      <figure>
        <a
          href="https://www.crigroups.com/"
          data-tooltip-id="footer-icon-tooltip"
          data-tooltip-content="Click here!"
        >
          <img src={globeIcon} alt="globe-icon" className="icons" />
        </a>
        <figcaption>www.crigroups.com</figcaption>
      </figure>
      <Tooltip id="footer-icon-tooltip" />
    </div>
  );
};

export default Footer;
