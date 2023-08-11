import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="Header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              spy
              smooth
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="programs" spy smooth>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="reasons" spy smooth>
              Why us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" spy smooth>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy
              smooth
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
