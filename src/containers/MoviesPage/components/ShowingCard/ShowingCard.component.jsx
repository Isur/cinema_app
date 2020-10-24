import React from "react";
import "./ShowingCard.styles.scss";
import { Divider } from "antd";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const ShowingCard = ({ showing }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={"ShowingCard"}
      onClick={() => dispatch(push(`/showings/${showing.id}`))}
    >
      <img
        className={"ShowingCard__Image"}
        src={"http://placehold.it/600x200"}
      />
      <Divider style={{ margin: 10 }} />
      <h3 className={"ShowingCard__Title"}>
        {showing.movie && showing.movie.title}
      </h3>
      <div>
        <span className={"ShowingCard__Hall"}>
          Hall: {showing.hall && showing.hall.id}
        </span>
        <br />
        <span className={"ShowingCard__Time"}>{showing.time}</span>
      </div>
    </div>
  );
};

export default ShowingCard;
