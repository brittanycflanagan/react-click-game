import React from "react";
import "./Nav.css";


const Nav = props => (
<nav className="navbar"><ul><li className="brand"><a href="/">Clicky Game</a></li>
<li className="">Click an image to begin!</li>
<li>Score: {props.score} | Top Score: {props.topScore}</li></ul></nav>
    
);






export default Nav;
