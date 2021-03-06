import React from "react";
import "./HallCard.styles.scss";
import { Divider } from "antd";

const HallCard = ({ hall, onClick }) => {
  return (
    <div className={"HallCard"} onClick={() => onClick()}>
      <img
        className={"HallCard__Image"}
        src={`https://picsum.photos/id/${Math.ceil(
          Math.random() * 100
        )}/200/600`}
      />
      <Divider style={{ margin: 10 }} />
      <h3 className={"HallCard__Name"}>{hall.name}</h3>
      <br />
      <span className={"HallCard__Size"}>
        SizeX: {hall.sizeX} | SizeY: {hall.sizeY}
      </span>
    </div>
  );
};

export default HallCard;
