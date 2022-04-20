import React from "react";
import { NavLink } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

import Logo from "../assets/images/logo.svg";

const mainNav = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
];

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle">
            <BiMenuAltRight />
          </div>
          <div className="header__menu__left">
            <div className="header__menu__left__close">
              <BsChevronLeft />
            </div>
            {mainNav.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `header__menu__item header__menu__left__item ${isActive ? "active" : ""} `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="header__menu__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
