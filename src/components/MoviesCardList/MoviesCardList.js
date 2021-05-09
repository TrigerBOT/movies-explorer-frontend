import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList() {
  const moviesCards = ["a"];

  return ((moviesCards && moviesCards.length) || 0) > 0 ? (
    <ul className="cards">
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
      <li>
        <MoviesCard />
      </li>
    </ul>
  ) : (
    <p className="cards__not-found">Ничего не найдено</p>
  );
}

export default MoviesCardList;
