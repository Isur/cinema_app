import React from "react";
import "./HallCard.styles.scss";
import { Divider } from "antd";

const HallCard = ({ hall }) => {
  return (
    <div className={"HallCard"}>
      <img className={"HallCard__Image"} src={"http://placehold.it/200x600"} />
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
