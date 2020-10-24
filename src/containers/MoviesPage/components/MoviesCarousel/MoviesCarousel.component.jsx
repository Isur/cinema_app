import React from "react";
import "./MoviesCarousel.styles.scss";
import MovieCard from "../MovieCard/MovieCard.component";
import { useSelector } from "react-redux";

const MoviesCarousel = () => {
  const movies = useSelector((state) => state.moviesState.movies);

  return (
    <div className={"MoviesCarousel"}>
      {movies &&
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default MoviesCarousel;
