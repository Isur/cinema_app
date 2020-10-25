import React, { useEffect } from "react";
import "./ShowingCard.styles.scss";
import { Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { fetchMovie } from "../../../../store/Movies/Movies.actions";
import { fetchHall } from "../../../../store/Halls/Halls.actions";

const ShowingCard = ({ showing }) => {
  const dispatch = useDispatch();

  const showingMovie = useSelector((state) =>
    state.moviesState.movies.find((movie) => movie.id === showing.movieId)
  );
  const showingHall = useSelector((state) =>
    state.hallsState.halls.find((hall) => {
      if (showing) {
        return hall.id === showing.hallId;
      }
    })
  );

  useEffect(() => {
    if (!showingMovie) {
      dispatch(fetchMovie(showing.movieId));
    }

    if (!showingHall) {
      dispatch(fetchHall(showing.hallId));
    }
  }, [showingHall, showingMovie]);

  return (
    <div
      className={"ShowingCard"}
      onClick={() => dispatch(push(`/showings/${showing.id}`))}
    >
      <img
        className={"ShowingCard__Image"}
        src={`https://picsum.photos/id/${Math.ceil(
          Math.random() * 100
        )}/600/200`}
      />
      <Divider style={{ margin: 10 }} />
      <h3 className={"ShowingCard__Title"}>
        {showingMovie && showingMovie.title}
      </h3>
      <div>
        <span className={"ShowingCard__Hall"}>
          Hall: {showingHall && showingHall.name}
        </span>
        <br />
        <span className={"ShowingCard__Time"}>{showing.time}</span>
      </div>
    </div>
  );
};

export default ShowingCard;
