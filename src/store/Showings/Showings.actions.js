import {
  ADD_SHOWING,
  ADD_SHOWING_FAIL,
  ADD_SHOWING_SUCCESS,
  CREATE_TICKET,
  CREATE_TICKET_FAIL,
  CREATE_TICKET_SUCCESS,
  FETCH_SHOWINGS,
  FETCH_SHOWINGS_FAIL,
  FETCH_SHOWINGS_SUCCESS,
  UPDATE_SHOWING,
  UPDATE_SHOWING_FAIL,
  UPDATE_SHOWING_SUCCESS,
} from "./Showings.types";

export const fetchShowings = () => {
  return {
    type: FETCH_SHOWINGS,
  };
};

export const fetchShowingsSuccess = (showings) => {
  return {
    type: FETCH_SHOWINGS_SUCCESS,
    showings: showings,
  };
};

export const fetchShowingsFail = (error) => {
  return {
    type: FETCH_SHOWINGS_FAIL,
    error: error,
  };
};

export const addShowing = (movie, hall, time) => {
  return {
    type: ADD_SHOWING,
    movie,
    hall,
    time,
  };
};

export const addShowingSuccess = (showing) => {
  return {
    type: ADD_SHOWING_SUCCESS,
    showing: showing,
  };
};

export const addShowingFail = (error) => {
  return {
    type: ADD_SHOWING_FAIL,
    error: error,
  };
};

export const updateShowing = (id, movie, hall, time) => {
  return {
    type: UPDATE_SHOWING,
    id,
    movie,
    hall,
    time,
  };
};

export const updateShowingSuccess = (showing) => {
  return {
    type: UPDATE_SHOWING_SUCCESS,
    showing: showing,
  };
};

export const updateShowingFail = (error) => {
  return {
    type: UPDATE_SHOWING_FAIL,
    error: error,
  };
};
