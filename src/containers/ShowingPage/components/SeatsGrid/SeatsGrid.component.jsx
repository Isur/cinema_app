import React from "react";
import "./SeatsGrid.styles.scss";
import { Affix, Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  buyTicket,
  createTicket,
  deleteTicket,
} from "../../../../store/Tickets/Tickets.actions";

const SeatsGrid = ({ X, Y, user, showing, booked, bought }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.ticketsState.loading);
  const bookedTickets = useSelector((state) =>
    state.userState.bookedTickets.filter((t) => t.status === 0)
  );

  const isTicketsEqual = (t1, t2) => {
    return (
      t1.fieldX === t2.seat &&
      t1.fieldY === t2.row &&
      t1.showingId === showing.id
    );
  };

  const selectSeat = (ticket) => {
    if (bookedTickets && bookedTickets.find((t) => isTicketsEqual(t, ticket))) {
      dispatch(
        deleteTicket(
          bookedTickets.find((t) => {
            return isTicketsEqual(t, ticket);
          }).id
        )
      );
    } else {
      dispatch(createTicket(user, showing.id, ticket.seat, ticket.row));
    }
  };

  const isBookedByMe = (r, s) => {
    return bookedTickets.find((t) =>
      isTicketsEqual(t, { row: r + 1, seat: s + 1 })
    );
  };

  const isBooked = (r, s) => {
    return booked.find((t) => {
      return (
        t.fieldX === s + 1 &&
        t.fieldY === r + 1 &&
        t.status === 0 &&
        t.userId !== user
      );
    });
  };

  const isBought = (r, s) => {
    return bought.find((t) => {
      return t.fieldX === s + 1 && t.fieldY === r + 1 && t.status === 1;
    });
  };

  return (
    <div className={"SeatsGrid"}>
      <div className={`SeatsGrid__Overlay ${loading ? "visible" : ""}`}>
        <Spin size={"large"} />
      </div>
      {[...Array(Y)].map((el, r) => {
        return (
          <div className={"SeatsGrid__Row"}>
            {[...Array(X)].map((el, s) => {
              return (
                <div
                  className={`SeatsGrid__Seat ${
                    isBooked(r, s) ? "booked" : ""
                  } ${isBookedByMe(r, s) ? "selected" : ""} ${
                    isBought(r, s) ? "disabled" : ""
                  } `}
                  onClick={() =>
                    isBought(r, s)
                      ? () => {}
                      : selectSeat({ row: r + 1, seat: s + 1 })
                  }
                >
                  {s + 1}
                </div>
              );
            })}
          </div>
        );
      })}
      <Affix offsetBottom={10}>
        <Button
          disabled={!bookedTickets.length}
          size={"large"}
          type="primary"
          onClick={() => {
            bookedTickets.forEach((ticket) => {
              dispatch(
                buyTicket(
                  ticket.id,
                  user,
                  ticket.showingId,
                  ticket.fieldX,
                  ticket.fieldY
                )
              );
            });
          }}
        >
          Buy {bookedTickets.length} tickets
        </Button>
      </Affix>
    </div>
  );
};

export default SeatsGrid;
