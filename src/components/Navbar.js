import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
    <p>Trang Do</p>
    <div className="navbar">
        <NavLink 
        to={"/"}
        style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
    )}>
        _hello
        </NavLink>

        <NavLink
        to="/"
        style={ ({isActive}) => (
            isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>
        _about-me
        </NavLink>

        <NavLink
        to="/"
        style={ ({isActive}) => (
            isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>
        _projects
        </NavLink>

        <NavLink
        to="/"
        style={ ({isActive}) => (
            isActive ? linkStyles.activeLink : linkStyles.defaultLink
            )}>
        _contact-me
        </NavLink>
      </div>
      </>
      );

      
}

export default Navbar;

const linkStyles = {
  activeLink: {
    color: "blue",
  },
  defaultLink: {
    textDecoration: "none",
    color: "white",
  },
};
