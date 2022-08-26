import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            React JS
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SCP 002
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/scp3"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SCP 003
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/scp4"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SCP 004
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/scp5"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SCP 005
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  exact
                  to="/scp6"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
              >
                SCP 006
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
