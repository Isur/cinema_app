import {
  BUY_TICKET,
  BUY_TICKET_FAIL,
  BUY_TICKET_SUCCESS,
  CREATE_TICKET,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
  DELETE_TICKET,
  DELETE_TICKET_FAIL,
  DELETE_TICKET_SUCCESS,
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

export const buyTicket = (id, user, showing, x, y) => {
  return {
    type: BUY_TICKET,
    id,
    user,
    showing,
    x,
    y,
  };
};

export const buyTicketSuccess = (ticket) => {
  return {
    type: BUY_TICKET_SUCCESS,
    ticket: ticket,
  };
};

export const buyTicketFail = (error) => {
  return {
    type: BUY_TICKET_FAIL,
    error: error,
  };
};

export const deleteTicket = (id) => {
  return {
    type: DELETE_TICKET,
    id,
  };
};

export const deleteTicketSuccess = (ticket) => {
  return {
    type: DELETE_TICKET_SUCCESS,
    ticket: ticket,
  };
};

export const deleteTicketFail = (error) => {
  return {
    type: DELETE_TICKET_FAIL,
    error: error,
  };
};
