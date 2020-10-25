import React from "react";
import "./ShowingsCarousel.styles.scss";
import ShowingCard from "../ShowingCard/ShowingCard.component";
import { useSelector } from "react-redux";

const ShowingsCarousel = ({ movie = null }) => {
  const showings = useSelector((state) => state.showingsState.showings);

  return (
    <div className={"ShowingsCarousel"}>
      {showings &&
        showings
          .filter((s) => {
            if (movie) {
              return s.movieId === movie;
            } else {
              return true;
            }
          })
          .map((showing) => {
            return <ShowingCard key={showing.id} showing={showing} />;
          })}
    </div>
  );
};

export default ShowingsCarousel;
