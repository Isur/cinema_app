import React from "react";
import "./MoviesCarousel.styles.scss";
import MovieCard from "../MovieCard/MovieCard.component";

const MoviesCarousel = () => {
  const movies = [
    {
      id: 1,
      title: "Titanic",
      year: 1997,
      director: "???",
    },
    {
      id: 2,
      title: "Wiedźmin",
      year: 2000,
      director: "???",
    },
    {
      id: 3,
      title: "O północy na Pradze",
      year: 2020,
      director: "???",
    },
    {
      id: 4,
      title: "Sadzić palić...",
      year: 2050,
      director: "???",
    },
  ];
  return (
    <div className={"MoviesCarousel"}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesCarousel;
