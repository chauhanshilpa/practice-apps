import React from "react";

const Quality = () => {
  return (
    <>
      <h3 className="qualities-heading">“Why should You go ahead with Us?”</h3>
      <div className="qualities">
        <div className="icon-type">
          <span className="icon">
            <i className="fa-solid fa-truck-fast"></i>
          </span>
          <div className="about-icon">Fast Delivery</div>
        </div>
        <div className="icon-type">
          <span className="icon">
            <i className="fa-solid fa-hands-holding"></i>
          </span>
          <div className="about-icon">100% Hand Made</div>
        </div>
        <div className="icon-type">
          <span className="icon">
            <i className="fa-solid fa-wallet"></i>
          </span>
          <div className="about-icon">Wallet Friendly</div>
        </div>
        <div className="icon-type">
          <span className="icon">
            <i className="fa-solid fa-seedling"></i>
          </span>
          <div className="about-icon">Pure Veg</div>
        </div>
      </div>
    </>
  );
};

export default Quality;
