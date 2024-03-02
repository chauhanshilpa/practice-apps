import React from "react";

const Form = ({ closeForm }) => {
  return (
    <div className="form-container">
      <div className="cross-icon" onClick={closeForm}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h2>FLAT 15% OFF</h2>
      <p>Enter your details and win a coupon worth 15% off</p>
      <form className="container">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Phone"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your Email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Show me Coupon
        </button>
      </form>
    </div>
  );
};

export default Form;
