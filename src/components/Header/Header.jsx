import React from "react";
import data from "../../data";
import { Logo } from "../Logo/Logo";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { UserShotInfo } from "../UserShotInfo/UserShotInfo";
import arrow from "@/assets/img/arrow.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__nav">
        <ul>
          {data.navigation.map((nav, index) => (
            <li className="navBar__list list" key={index}>
              <div className="list__block">
                <img src={nav.src} alt="key" className="list__logo" />
                <NavLink to={nav.to} className="list__text">
                  {nav.text}
                </NavLink>
              </div>
              <img src={arrow} alt="arrow" className="list__arrow" />
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__user">
        <UserShotInfo />
      </div>
    </header>
  );
};
