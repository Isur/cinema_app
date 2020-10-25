import {
  BUY_TICKET,
  BUY_TICKET_FAIL,
  BUY_TICKET_SUCCESS,
  CREATE_TICKET,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
  DELETE_TICKET_SUCCESS,
} from "./Tickets.types";
import {
  FETCH_TICKETS,
  FETCH_TICKETS_FAIL,
  FETCH_TICKETS_SUCCESS,
} from "../Tickets/Tickets.types";

const INITIAL_STATE = {
  tickets: [],
  loading: false,
};

const updateTicketsArray = (state, action) => {
  const newIndex = state.tickets.findIndex(
    (ticket) => ticket.id === action.ticket.id
  );
  const newArray = [...state.tickets];
  newArray.splice(newIndex, 1, action.ticket);

  return [...newArray];
};

const ticketsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.tickets,
        loading: false,
      };
    case FETCH_TICKETS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CREATE_TICKET:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: state.tickets.concat(action.ticket),
        loading: false,
      };
    case CREATE_TICKET_FAIL:
      return {
        ...state,
        loading: false,
      };
    case BUY_TICKET:
      return {
        ...state,
        loading: true,
      };
    case BUY_TICKET_SUCCESS:
      return {
        ...state,
        tickets: updateTicketsArray(state, action),
        loading: false,
      };
    case BUY_TICKET_FAIL:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets.filter((t) => t.id !== action.ticket.id)],
      };
    default:
      return { ...state };
  }
};

export default ticketsReducer;
