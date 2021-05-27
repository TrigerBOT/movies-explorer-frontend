import React, { useState } from 'react';
import './MoviesCard.css';

import { useLocation } from 'react-router';

function MoviesCard({
  movie, saved, onSaveMovie, onDeleteMovie,
}) {
  const [isSaved, setIsSaved] = useState(saved);
  const imgUrl = 'https://api.nomoreparties.co';
  const handleClick = () => {
    if (!saved) {
      setIsSaved(!isSaved);
      console.log(saved);
      onSaveMovie(movie);
    } else {
      setIsSaved(!isSaved);
      onDeleteMovie(movie.movieId);
    }
  };
  const { pathname } = useLocation();

  if (pathname === '/movies') {
    return (
      <div className="card">
        <a href={movie.trailer} target="_blank" rel="noreferrer">
          <img className="card__image" src={imgUrl + movie.image.url} />
        </a>
        <div className="card__box">
          <div className="card__info">
            <p className="card__title">{movie.nameRU}</p>
            <p className="card__time">
              {movie.duration}
              {' '}
              мин.
              {' '}
            </p>
          </div>

          <button
            onClick={handleClick}
            className={`card__btn 
          ${isSaved && pathname === '/movies' && 'card__btn_type_liked'}
          ${
            !isSaved && (pathname === '/movies' ? 'card__btn_type_check' : 'card__btn_type_cross')
          }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <a href={movie.trailer} target="_blank" rel="noreferrer">
        <img className="card__image" src={movie.image} />
      </a>
      <div className="card__box">
        <div className="card__info">
          <p className="card__title">{movie.nameRU}</p>
          <p className="card__time">
            {movie.duration}
            {' '}
            мин.
            {' '}
          </p>
        </div>

        <button
          onClick={handleClick}
          className="card__btn card__btn_type_cross"
        />
      </div>
    </div>
  );
}
export default MoviesCard;
