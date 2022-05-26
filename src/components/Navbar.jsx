import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.svg";

import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar--center">
          <div className="navbar__header">
            <NavLink to="">
              <img src={Logo} alt="logo.svg" />
            </NavLink>
            <button
              type="button"
              className="navbar__btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="navbar__icon" />
            </button>
          </div>
          <ul
            className={`navbar__links ${
              this.state.isOpen ? "show-nav" : ""
            }`}
          >
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
