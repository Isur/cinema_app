import React from "react";
import "./MovieCard.styles.scss";
import { Divider } from "antd";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={"MovieCard"}
      onClick={() => dispatch(push(`/movies/${movie.id}`))}
    >
      <img
        className={"MovieCard__Image"}
        src={`https://picsum.photos/id/${Math.ceil(
          Math.random() * 100
        )}/600/200`}
      />
      <Divider style={{ margin: 10 }} />
      <h3 className={"MovieCard__Title"}>{movie.title}</h3>
      <div>
        <span className={"MovieCard__Year"}>Year: {movie.year}</span>
        <br />
        <span className={"MovieCard__Director"}>
          Director: {movie.director}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
