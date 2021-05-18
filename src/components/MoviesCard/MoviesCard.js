import React from "react";
import "./MoviesCard.css";

import { useLocation } from "react-router";
function MoviesCard({movie,  saved, onSaveMovie, onDeleteMovie }) {
  const imgUrl ='https://api.nomoreparties.co'
  const {
    duration,
    image,
    trailer,
    nameRU,
    movieId,
  } = movie;
  const handleClick = () => {
    if (!saved) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(movieId);
    }
  };
  console.log(imgUrl+image.url);
  const { pathname } = useLocation();
  return (
    <div className="card">
      <a href={trailer} target="_blank">
        <img className="card__image" src={imgUrl+image.url}/>
      </a>
      <div className="card__box">
        <div className="card__info">
          <p className="card__title">{nameRU}</p>
          <p className="card__time">{duration} мин. </p>
        </div>

        <button
          onClick={handleClick}
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
