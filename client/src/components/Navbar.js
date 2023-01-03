import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="full-nav">
      <div className="nav-1">
        <div className="nav-box"> 
          <a href="/">trang-do-thuy</a>
        </div> 
      </div>
    <div className="nav-2">
      <div className="nav-box">
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

      <div className="nav-4">
        <div className="nav-box"> 
          <a href="/">=</a>
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
    // textDecoration: "pink underline",
    color: "#F8F8F2",
    // color: "#dd82b8",
    textShadow: "1px 3px #dd82b8",
    // fontSize: "bold",
  },
};
