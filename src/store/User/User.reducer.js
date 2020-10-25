import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  RESET_TIMER,
  START_TIMER,
} from "./User.types";
import {
  BUY_TICKET_SUCCESS,
  CREATE_TICKET_SUCCESS,
  DELETE_TICKET_SUCCESS,
} from "../Tickets/Tickets.types";

const INITIAL_STATE = {
  id: null,
  firstName: null,
  lastName: null,
  userName: null,
  role: null,
  accessToken: null,
  bookedTickets: [],
  timerStart: null,
};

const updateTicketsArray = (state, action) => {
  const newIndex = state.bookedTickets.findIndex(
    (ticket) => ticket.id === action.ticket.id
  );
  const newArray = [...state.bookedTickets];
  newArray.splice(newIndex, 1, action.ticket);

  return [...newArray];
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerStart: Date.now() + 180000,
      };
    case RESET_TIMER:
      return {
        ...state,
        timerStart: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        userName: action.userName,
        role: action.role,
        accessToken: action.token,
      };
    case CREATE_TICKET_SUCCESS:
      return {
        ...state,
        bookedTickets: [...state.bookedTickets, action.ticket],
      };
    case BUY_TICKET_SUCCESS:
      return {
        ...state,
        bookedTickets: updateTicketsArray(state, action),
      };
    case DELETE_TICKET_SUCCESS:
      return {
        ...state,
        bookedTickets: [
          ...state.bookedTickets.filter((t) => {
            return t.id !== action.ticket;
          }),
        ],
      };
    default:
      return state;
  }
};

export default userReducer;
