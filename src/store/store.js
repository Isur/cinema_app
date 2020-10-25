import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import { createBrowserHistory } from "history";
import { watchUserSaga } from "./User/User.sagas";
import { watchMoviesSaga } from "./Movies/Movies.sagas";
import { watchShowingsSaga } from "./Showings/Showings.sagas";
import { watchHallsSaga } from "./Halls/Halls.sagas";
import { watchTicketsSaga } from "./Tickets/Tickets.sagas";
import { watchUsersSaga } from "./Users/Users.sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const connectedRouterMiddleware = routerMiddleware(history);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = createStore(
  persistedReducer,
  applyMiddleware(connectedRouterMiddleware, sagaMiddleware, logger)
);
export const persistor = persistStore(store);

sagaMiddleware.run(watchUserSaga);
sagaMiddleware.run(watchMoviesSaga);
sagaMiddleware.run(watchShowingsSaga);
sagaMiddleware.run(watchHallsSaga);
sagaMiddleware.run(watchTicketsSaga);
sagaMiddleware.run(watchUsersSaga);
