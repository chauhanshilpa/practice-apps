import React from "react";

const Navbar = () => {
  function handleChange() {
    console.log("will work in future changes");
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand brand-name-and-logo">
          <img
            src="https://patilkaki.s3.ap-south-1.amazonaws.com/logo.png"
            alt="Logo"
            width="36"
            height="35"
            className="d-inline-block align-text-top brand-logo"
          />
          <span className="brand-name">Patil Kaki</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Traditional
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Healthy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true" href="/">
                Namkeen Specials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true" href="/">
                Laddoos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-disabled="true" href="/">
                Upvas Snacks
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search items"
              aria-label="Search"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
