import React from "react";
import "./ShowingsCarousel.styles.scss";
import ShowingCard from "../ShowingCard/ShowingCard.component";
import { useSelector } from "react-redux";

const ShowingsCarousel = () => {
  const showings = useSelector((state) => state.showingsState.showings);

  return (
    <div className={"ShowingsCarousel"}>
      {showings &&
        showings.map((showing) => {
          return <ShowingCard key={showing.id} showing={showing} />;
        })}
    </div>
  );
};

export default ShowingsCarousel;
