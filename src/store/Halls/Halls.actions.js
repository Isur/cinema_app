import {
  ADD_HALL,
  ADD_HALL_FAIL,
  ADD_HALL_SUCCESS,
  FETCH_HALLS,
  FETCH_HALLS_FAIL,
  FETCH_HALLS_SUCCESS,
} from "./Halls.types";

export const fetchHalls = () => {
  return {
    type: FETCH_HALLS,
  };
};

export const fetchHallsSuccess = (halls) => {
  return {
    type: FETCH_HALLS_SUCCESS,
    halls: halls,
  };
};

export const fetchHallsFail = (error) => {
  return {
    type: FETCH_HALLS_FAIL,
    error: error,
  };
};

export const addHall = (name, sizeX, sizeY) => {
  return {
    type: ADD_HALL,
    name,
    sizeX,
    sizeY,
  };
};

export const addHallSuccess = (hall) => {
  return {
    type: ADD_HALL_SUCCESS,
    hall: hall,
  };
};

export const addHallFail = (error) => {
  return {
    type: ADD_HALL_FAIL,
    error: error,
  };
};
