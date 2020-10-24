import {
  ADD_SHOWING,
  ADD_SHOWING_FAIL,
  ADD_SHOWING_SUCCESS,
  FETCH_SHOWINGS,
  FETCH_SHOWINGS_FAIL,
  FETCH_SHOWINGS_SUCCESS,
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
