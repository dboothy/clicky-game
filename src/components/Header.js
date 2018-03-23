import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h3> Click an Image to earn points, but don't click on any more than once!</h3>

  </header>
);

export default Header;
