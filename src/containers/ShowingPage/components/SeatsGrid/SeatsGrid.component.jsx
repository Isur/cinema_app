import React, { useState } from "react";
import * as _ from "lodash";
import "./SeatsGrid.styles.scss";
import { Affix, Button, Spin } from "antd";
import { useSelector } from "react-redux";

const SeatsGrid = ({ X, Y, onSubmit, disabled }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const loading = useSelector((state) => state.ticketsState.loading);

  const selectSeat = (ticket) => {
    if (selectedSeats.find((t) => _.isEqual(t, ticket))) {
      setSelectedSeats([...selectedSeats.filter((s) => !_.isEqual(ticket, s))]);
    } else {
      setSelectedSeats([...selectedSeats, ticket]);
    }
  };

  const isSelected = (r, s) => {
    return selectedSeats.find((t) => _.isEqual(t, { row: r + 1, seat: s + 1 }));
  };

  const isDisabled = (r, s) => {
    return disabled.find((t) => {
      return t.fieldX === s + 1 && t.fieldY === r + 1;
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
                    isSelected(r, s) ? "selected" : ""
                  } ${isDisabled(r, s) ? "disabled" : ""}`}
                  onClick={() =>
                    isDisabled(r, s)
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
          disabled={!selectedSeats.length}
          size={"large"}
          type="primary"
          onClick={() => {
            onSubmit(selectedSeats);
            setSelectedSeats([]);
          }}
        >
          Buy {selectedSeats.length} tickets
        </Button>
      </Affix>
    </div>
  );
};

export default SeatsGrid;
