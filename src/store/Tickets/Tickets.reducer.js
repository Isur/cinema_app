import {
  CREATE_TICKET,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
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
    default:
      return { ...state };
  }
};

export default ticketsReducer;
