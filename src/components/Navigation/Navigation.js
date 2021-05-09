import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({openNavigation}) {
  
    return (
      
            <div className={`navigation ${openNavigation && "navigation_opened"}`}>
              <ul className={`navigation__list ${openNavigation && "navigation__list_opened"}`}>

              <li className="navigation__item navigation__item_main">
                  <NavLink className="navigation__link"
                           activeClassName="navigation__link_active"
                           to={"/"}>Главная</NavLink>
                </li>

                <li className="navigation__item">
                  <NavLink className="navigation__link"
                           activeClassName="navigation__link_active"
                           to={"/movies"}>Фильмы</NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className="navigation__link"
                           activeClassName="navigation__link_active"
                           to={"/saved-movies"}>Сохраненные фильмы</NavLink>
                </li>
                <li className="navigation__item navigation__item_profile">
                  <NavLink className="navigation__link navigation__link_profile" to="/profile">
             
                  </NavLink>
                </li>
              </ul>
            </div>
          
    );
  }
  
  export default Navigation;