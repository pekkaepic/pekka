import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
const navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default navbar;
