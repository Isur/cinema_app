import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./User/User.reducer";
import moviesReducer from "./Movies/Movies.reducer";
import showingsReducer from "./Showings/Showings.reducer";
import hallsReducer from "./Halls/Halls.reducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userState: userReducer,
    moviesState: moviesReducer,
    showingsState: showingsReducer,
    hallsState: hallsReducer,
  });

export default rootReducer;
