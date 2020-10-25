import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./User/User.reducer";
import moviesReducer from "./Movies/Movies.reducer";
import showingsReducer from "./Showings/Showings.reducer";
import hallsReducer from "./Halls/Halls.reducer";
import ticketsReducer from "./Tickets/Tickets.reducer";
import usersReducer from "./Users/Users.reducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userState: userReducer,
    moviesState: moviesReducer,
    showingsState: showingsReducer,
    hallsState: hallsReducer,
    ticketsState: ticketsReducer,
    usersState: usersReducer,
  });

export default rootReducer;
