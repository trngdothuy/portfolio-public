import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div class="full-nav">
      <div class="nav-1">
        <div class="nav-box"> 
          <a href="/">trang-do-thuy</a>
        </div> 
      </div>
    <div className="nav-2">
      <div class="nav-box">
        <NavLink 
          to={"/"}
          style={ ({isActive}) => (
          isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
          _hello
        </NavLink>
      </div>
        
      <div class="nav-box">
        <NavLink
          to="/about-me"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
        _about-me
        </NavLink>
      </div>
      
      <div class="nav-box">
        <NavLink
          to="/projects"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
        _projects
        </NavLink>
      </div>
      </div>

      <div class="nav-3">
        <div class="nav-box">
          <NavLink
          to="/contact"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
          _contact-me
          </NavLink>
        </div>
      </div>
    </div>
      );

      
}

export default Navbar;

const linkStyles = {
  defaultLink: {
    color: "#6272A4",
    textDecoration: "none",
  },
  activeLink: {
    textDecoration: "none",
    color: "#F8F8F2",
  },
};
