import "./Header.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleClickOnNavSwitch = () => {
    setOpenNavigation(!openNavigation);
  };
  return (
    <header className="header">
      <NavLink to="/">
        <div className="header__logo"></div>
      </NavLink>
      {loggedIn ? (
        <>
          <Navigation
            openNavigation={openNavigation}
            onCloseNavigation={handleClickOnNavSwitch}
          />
          <button
            className={`header__menu ${
              openNavigation && "header__menu_opened"
            }`}
            onClick={handleClickOnNavSwitch}
          />
        </>
      ) : (
        <ul className="header__auth">
          <li>
            <NavLink className="header__link " to="/signup">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link header__link_signin" to="/signin">
              Войти
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
