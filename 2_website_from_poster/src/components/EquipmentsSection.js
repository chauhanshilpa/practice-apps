import React from "react";
import equipments from "../assets/equipments.png";

const EquipmentsSection = () => {
  return (
    <div className="equipments-section">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={equipments} alt="equipments" id="equipments-image" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
    </div>
  );
};

export default EquipmentsSection;
