import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-3 footer">
      <h4 className="text-center">All Rights Reserved &copy; MERN</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
