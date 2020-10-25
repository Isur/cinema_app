import React, { useEffect, useState } from "react";
import "./HallsPage.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchHalls } from "../../store/Halls/Halls.actions";
import { Button, Divider } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import NewHallModel from "./components/NewHallModal/NewHallModel.component";
import MoviesCarousel from "../MoviesPage/components/MoviesCarousel/MoviesCarousel.component";
import HallCard from "./components/HallCard/HallCard.component";

const HallsPage = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userState.role);
  const halls = useSelector((state) => state.hallsState.halls);

  const [creatingHall, setCreatingHall] = useState(false);
  const [updatingHall, setUpdatingHall] = useState(false);
  const [editedHall, setEditedHall] = useState(null);

  useEffect(() => {
    dispatch(fetchHalls());
  }, []);

  return (
    <div className={"HallsPage"}>
      <NewHallModel
        hall={editedHall}
        visible={creatingHall || updatingHall}
        onClose={() => {
          setCreatingHall(false);
          setUpdatingHall(false);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Halls</h2>
        {role === "Admin" && (
          <Button
            icon={<PlusCircleFilled />}
            type={"primary"}
            onClick={() => setCreatingHall(true)}
          >
            Add Hall
          </Button>
        )}
      </div>
      <Divider />
      <div
        style={{
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          flexDirection: "row",
          padding: "2rem",
        }}
      >
        {halls.map((hall) => {
          return (
            <HallCard
              onClick={() => {
                setEditedHall(hall.id);
                setUpdatingHall(true);
              }}
              hall={hall}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HallsPage;
