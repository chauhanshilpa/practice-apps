import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="prebooking">
        <div data-v-6da3ec0c="" className="w-full relative">
          <div
            data-v-6da3ec0c=""
            className="custom-shape-divider"
            style={{ top: "0px" }}
          >
            <svg
              data-v-6da3ec0c=""
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{ width: "calc(100% + 1.3px)", height: "100px" }}
            >
              <path
                data-v-6da3ec0c=""
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
                style={{ fill: "rgb(250, 250, 250)" }}
              ></path>
            </svg>
          </div>
          <button type="button" className="btn btn-outline-secondary btn-lg">
            Order Now
          </button>
          <p>
            Act now! Secure your snacks in advance – prebook your order and
            guarantee a delectable journey with Darsheel's Delights. Don't miss
            out, reserve your treats today!
          </p>
        </div>
      </div>
      <div className="contact-medium">
        <p>
          <a href="/">Contact Us</a>
        </p>
        <p>
          <a href="/">Email</a>
        </p>
        <p>
          <a href="/">Facebook</a>
        </p>
        <p>
          <a href="/">Instagram</a>
        </p>
      </div>
    </>
  );
};

export default CallToAction;
