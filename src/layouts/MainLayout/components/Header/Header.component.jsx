import React, { useEffect, useRef } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import "./Header.styles.scss";
import { Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "react-countdown";
import { deleteTicket } from "../../../../store/Tickets/Tickets.actions";
import { resetTimer } from "../../../../store/User/User.actions";

const HeaderBar = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.userState.bookedTickets);
  const timerStart = useSelector((state) => state.userState.timerStart);

  const timerRef = useRef(null);

  const countdownRenderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span>00:00</span>;
    } else {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  useEffect(() => {
    if (!tickets.length && timerRef.current) {
      setTimeout(() => {
        timerRef.current.getApi().stop();
      }, 1000);
      dispatch(resetTimer());
    }
  }, [tickets]);

  useEffect(() => {
    if (timerRef.current && timerStart) {
      setTimeout(() => {
        timerRef.current.getApi().start();
      }, 1000);
    }
  }, [timerRef, timerStart]);

  return (
    <div className={"HeaderBar"}>
      <div className={"HeaderBar__basket"}>
        <Badge count={tickets.filter((t) => t.status === 0).length}>
          <ShoppingOutlined className={"HeaderBar__basket__icon"} />
        </Badge>
        <span className={"HeaderBar__basket__timer"}>
          <Countdown
            ref={timerRef}
            date={timerStart || Date.now()}
            renderer={countdownRenderer}
            onComplete={() => {
              tickets
                .filter((t) => t.status === 0)
                .forEach((ticket) => {
                  dispatch(deleteTicket(ticket.id));
                });
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
