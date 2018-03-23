import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar">
	  <ul>
	  	<li>
	    <a href="/">Clicky Game!</a>
	    </li>
	    <li> Click and Image to Begin
	    </li>
	    <li> 
	    </li>
	  </ul>
  </nav>
);

export default Navbar;
