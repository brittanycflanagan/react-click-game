import React from "react";
import "./Footer.css";

const Footer = props => (
<footer className="footer">
    <span>{props.children}</span>
  </footer>
);


export default Footer;
