import React, { useEffect, useState } from "react";
import "./ShowingPage.styles.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Spin } from "antd";
import SeatsGrid from "./components/SeatsGrid/SeatsGrid.component";
import { fetchHalls } from "../../store/Halls/Halls.actions";
import { fetchShowings } from "../../store/Showings/Showings.actions";
import { PlusCircleFilled } from "@ant-design/icons";
import NewShowingModel from "../MoviesPage/components/NewShowingModal/NewShowingModal";
import { fetchTickets } from "../../store/Tickets/Tickets.actions";

const ShowingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userState.role);

  const [updatingShowing, setUpdatingShowing] = useState(false);
  const [editedShowing, setEditedShowing] = useState(null);

  const [hall, setHall] = useState(null);
  const [show, setShow] = useState(null);

  const user = useSelector((state) => state.userState.id);

  const boughtTickets = useSelector((state) =>
    state.ticketsState.tickets.filter((ticket) => {
      return ticket.showingId === id && ticket.status === 1;
    })
  );

  const bookedTickets = useSelector((state) =>
    state.ticketsState.tickets.filter((ticket) => {
      return ticket.showingId === id && ticket.status === 0;
    })
  );

  const showings = useSelector((state) => state.showingsState.showings);
  const halls = useSelector((state) => state.hallsState.halls);

  useEffect(() => {
    dispatch(fetchHalls());
    dispatch(fetchShowings());
    dispatch(fetchTickets());
  }, []);

  useEffect(() => {
    if (showings && halls) {
      const show = showings.find((s) => s.id === id);
      if (show) {
        setShow(show);
        setHall(halls.find((h) => h.id === show.hallId));
      }
    }
  }, [showings, halls]);

  return (
    <div className={"ShowingPage"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <NewShowingModel
          visible={updatingShowing}
          onClose={() => setUpdatingShowing(false)}
          showing={editedShowing}
        />
        <h2>Showing</h2>
        {role === "Admin" && (
          <Button
            icon={<PlusCircleFilled />}
            type={"primary"}
            onClick={() => {
              setEditedShowing(show.id);
              setUpdatingShowing(true);
            }}
          >
            Edit Showing
          </Button>
        )}
      </div>
      <Divider />
      {hall ? (
        <SeatsGrid
          X={hall.sizeX}
          Y={hall.sizeY}
          booked={bookedTickets}
          bought={boughtTickets}
          showing={show}
          user={user}
        />
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ShowingPage;
