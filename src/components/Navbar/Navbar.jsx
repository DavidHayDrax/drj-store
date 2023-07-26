import React from "react";
import "./Navbar.css";
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <header>
      <div className="header-content">
        <img
          src="https://i.imgur.com/4snADKo.jpg"
          alt="logo"
          className="logo"
        />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="nav-user">
          <RiMenuFill />
        </div>
      </div>
    </header>
  );
};

export { Navbar };
