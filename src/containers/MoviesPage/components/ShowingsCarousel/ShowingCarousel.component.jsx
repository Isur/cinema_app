import React from "react";
import "./ShowingsCarousel.styles.scss";
import ShowingCard from "../ShowingCard/ShowingCard.component";

const ShowingsCarousel = () => {
  const showings = [
    {
      id: 1,
      movie: {
        title: "Titanic",
      },
      hall: {
        id: 1,
      },
      time: "11-12-2020",
    },
    {
      id: 2,
      movie: {
        title: "Titanic",
      },
      hall: {
        id: 2,
      },
      time: "11-12-2020",
    },
    {
      id: 3,
      movie: {
        title: "Titanic",
      },
      hall: {
        id: 3,
      },
      time: "11-12-2020",
    },
  ];
  return (
    <div className={"ShowingsCarousel"}>
      {showings.map((showing) => {
        return <ShowingCard key={showing.id} showing={showing} />;
      })}
    </div>
  );
};

export default ShowingsCarousel;
