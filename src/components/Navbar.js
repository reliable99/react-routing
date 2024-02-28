import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">Home</NavLink>
      <NavLink style={navLinkStyles} to="/about">About</NavLink>
      <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
      <NavLink style={navLinkStyles} to="/message">Message</NavLink>
      <NavLink style={navLinkStyles} to="/product">Products</NavLink>
      <NavLink style={navLinkStyles} to="/newr">New</NavLink>
    </nav>
  );
};

export default Navbar;
