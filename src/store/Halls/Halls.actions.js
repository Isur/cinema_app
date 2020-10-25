import {
  ADD_HALL,
  ADD_HALL_FAIL,
  ADD_HALL_SUCCESS,
  FETCH_HALL,
  FETCH_HALL_FAIL,
  FETCH_HALL_SUCCESS,
  FETCH_HALLS,
  FETCH_HALLS_FAIL,
  FETCH_HALLS_SUCCESS,
  UPDATE_HALL,
  UPDATE_HALL_FAIL,
  UPDATE_HALL_SUCCESS,
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

export const fetchHall = (id) => {
  return {
    type: FETCH_HALL,
    id: id,
  };
};

export const fetchHallSuccess = (hall) => {
  return {
    type: FETCH_HALL_SUCCESS,
    hall: hall,
  };
};

export const fetchHallFail = (error) => {
  return {
    type: FETCH_HALL_FAIL,
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

export const updateHall = (id, name, sizeX, sizeY) => {
  return {
    type: UPDATE_HALL,
    id,
    name,
    sizeX,
    sizeY,
  };
};

export const updateHallSuccess = (hall) => {
  return {
    type: UPDATE_HALL_SUCCESS,
    hall: hall,
  };
};

export const updateHallFail = (error) => {
  return {
    type: UPDATE_HALL_FAIL,
    error: error,
  };
};
