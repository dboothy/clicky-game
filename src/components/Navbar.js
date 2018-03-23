import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav className="navbar">
	  <ul>
	  	<li>
	    <a href="/">Clicky Game!</a>
	    </li>
	    <li className = "message"> {props.message}
	    </li>
	    <li> 
	    	<span>Score: {props.score}</span>
	    	<br></br>
	    	<span>Top Score: {props.score2}</span>
	    </li>
	  </ul>
  </nav>
);

export default Navbar;
