import React from "react";
import "./Header.scss";
import data from "../../data";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { UserShotInfo } from "../UserShotInfo/UserShotInfo";
import arrow from "@/assets/img/arrow.png";

export const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive ? "active navBar__list list" : "navBar__list list";
  return (
    <header className="header">
      <div>
        <div className="header__logo">
          <Logo />
        </div>
        <nav className="header__nav">
          {data.navigation.map((nav, index) => (
            <NavLink to={nav.to} className={activeLink} key={index}>
              <div className="list__text">
                <img src={nav.src} alt="key" className="list__logo" />
                {nav.text}
              </div>
              <img src={arrow} alt="arrow" className="list__arrow" />
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="header__user">
        <UserShotInfo />
      </div>
    </header>
  );
};
