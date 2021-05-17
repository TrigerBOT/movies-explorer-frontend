import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";

function Movies(props) {
  return (
    <>
      <div className={`page__container_white`}>
        <Header loggedIn={props.loggedIn} />
      </div>
      <section className="movies">
        <SearchForm />
        <MoviesCardList
          movies={props.movies}
          onGetMovies={props.handleGetMovies}
          onAddMovie={props.onAddMovie}
          isSavedMovies={false}
          message={props.message}
          savedMovies={props.savedMovies}
          likedMovies={props.likedMovies}
        ></MoviesCardList>
        
      </section>
    </>
  );
}

export default Movies;
