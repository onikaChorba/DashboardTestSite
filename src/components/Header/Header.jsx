import React from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { UserShotInfo } from "../UserShotInfo/UserShotInfo";
import arrow from "@/assets/img/arrow.png";
import key from "@/assets/img/key.png";
import square from "@/assets/img/square.png";
import userIcon from "@/assets/img/userIcon.png";
import wallet from "@/assets/img/wallet.png";
import discount from "@/assets/img/discount.png";
import message from "@/assets/img/message.png";
export const Header = () => {
  const navigation = [
    {
      text: "Dashboard",
      to: "/",
      src: key,
    },
    {
      text: "Product",
      to: "/product",
      src: square,
    },
    {
      text: "Customers",
      to: "/customers",
      src: userIcon,
    },
    {
      text: "Income",
      to: "/income",
      src: wallet,
    },
    {
      text: "Promote",
      to: "/Promote",
      src: discount,
    },
    {
      text: "Help",
      to: "/help",
      src: message,
    },
  ];

  return (
    <header className="header">
      <div>
        <Logo />
        <nav>
          <ul>
            {navigation.map((nav) => (
              <li className="nav-bar__list">
                <img src={nav.src} alt="key" />
                <NavLink to={nav.to}>{nav.text}</NavLink>
                <img src={arrow} alt="arrow" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <UserShotInfo />
    </header>
  );
};
