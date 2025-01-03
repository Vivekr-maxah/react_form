import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";
import logo from "../assets/images/asset 0.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/rings" className="nav-link active">
                  RINGS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bracelets" className="nav-link">
                  BRACELETS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/earrings" className="nav-link">
                  EARRINGS
                </Link>
              </li>
            </ul>
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
