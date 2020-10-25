import {
  CREATE_TICKET,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
  FETCH_TICKETS,
  FETCH_TICKETS_FAIL,
  FETCH_TICKETS_SUCCESS,
} from "./Tickets.types";
import {
  FETCH_HALLS,
  FETCH_HALLS_FAIL,
  FETCH_HALLS_SUCCESS,
} from "../Halls/Halls.types";

export const fetchTickets = () => {
  return {
    type: FETCH_TICKETS,
  };
};

export const fetchTicketsSuccess = (tickets) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: tickets,
  };
};

export const fetchTicketsFail = (error) => {
  return {
    type: FETCH_TICKETS_FAIL,
    error: error,
  };
};

export const createTicket = (user, showing, x, y) => {
  return {
    type: CREATE_TICKET,
    user,
    showing,
    x,
    y,
  };
};

export const createTicketSuccess = (ticket) => {
  return {
    type: CREATE_TICKET_SUCCESS,
    ticket: ticket,
  };
};

export const createTicketFail = (error) => {
  return {
    type: CREATE_TICKET_FAIL,
    error: error,
  };
};
