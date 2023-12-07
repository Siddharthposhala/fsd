import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Header = () => {
  const navigate = useNavigate();

  const aboutClick = () => {
    navigate("about");
  };
  const projectClick = () => {
    navigate("projects");
  };
  const contactClick = () => {
    navigate("contact");
  };
  const homeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="title" onClick={homeClick}>
        PORTFOLIO
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <button className="button" onClick={homeClick}>
              Home
            </button>
          </li>
          <li>
            <button className="button" onClick={aboutClick}>
              About
            </button>
          </li>
          <li>
            <button className="button" onClick={projectClick}>
              Projects
            </button>
          </li>
          <li>
            <button className="button" onClick={contactClick}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
