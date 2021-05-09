import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router";
function MoviesCard() {
  const saved = true;
  const { pathname } = useLocation();
  return (
    <div className="card">
      <a href="#" target="_blank">
        <div className="card__image" />
      </a>
      <div className="card__box">
        <div className="card__info">
          <p className="card__title">Название</p>
          <p className="card__time">Длительность </p>
        </div>

        <button
          className={`card__btn 
          ${saved && pathname === "/movies" && "card__btn_type_liked"}
          ${
            saved &&
            (pathname === "/movies"
              ? "card__btn_type_check"
              : "card__btn_type_cross")
          }`}
        ></button>
      </div>
    </div>
  );
}

export default MoviesCard;
