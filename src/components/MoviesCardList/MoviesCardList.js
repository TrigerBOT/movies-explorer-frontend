import MoviesCard from "../MoviesCard/MoviesCard.js";
import React, { Suspense } from "react";
import Preloader from "../Preloader/Preloader";
function MoviesCardList(props) {
  const [counter, setCounter] = React.useState(4);

  function showMoreMovies() {
    setCounter(counter + 4);
  }

  return (

    <>
      <section className="cards">
        <Suspense fallback={<Preloader />}>
          {props.movies.length === 0 ? (
            <p className="cards__not-found">Ничего не найдено</p>
          ) : (
            props.movies
              .slice(0, counter)
              .map((movie, id) => (
                <MoviesCard
                  movie={movie}
                  saved={props.usersMoviesCards.some(usersItem => usersItem.movieId === movie.movieId)}
                  nameRU={movie.nameRU}
                  duration={movie.duration}
                  onSaveMovie={props.onSaveMovie}
                  onDeleteMovie={props.onDeleteMovie}
                  key={id}
                  id={movie._id}
                  {...movie}
                />
              ))
          )}
        </Suspense>
      </section>
      {props.movies.length >= 4 &&
        props.movies.length > counter &&
        props.movies.length <= 100 &&
        !props.message ? (
        <section className="more">
          <button
            type="button"
            onClick={showMoreMovies}
            className="movies__more"
          >
            Ещё
          </button>
        </section>
      ) : (
        ""
      )}


    </>
  );


}

export default MoviesCardList;
