import {
  ADD_HALL_SUCCESS,
  FETCH_HALL_SUCCESS,
  FETCH_HALLS,
  FETCH_HALLS_FAIL,
  FETCH_HALLS_SUCCESS,
  UPDATE_HALL_SUCCESS,
} from "./Halls.types";

const INITIAL_STATE = {
  halls: [],
  loading: false,
};

const updateHallsArray = (state, action) => {
  const newIndex = state.halls.findIndex((hall) => hall.id === action.hall.id);
  const newArray = [...state.halls];
  newArray.splice(newIndex, 1, action.hall);

  return [...newArray];
};

const hallsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_HALLS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HALLS_SUCCESS:
      return {
        ...state,
        halls: action.halls,
        loading: false,
      };
    case FETCH_HALLS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case FETCH_HALL_SUCCESS:
      return {
        ...state,
        halls: updateHallsArray(state, action),
      };
    case ADD_HALL_SUCCESS:
      return {
        ...state,
        halls: state.halls.concat(action.hall),
      };
    case UPDATE_HALL_SUCCESS:
      return {
        ...state,
        halls: updateHallsArray(state, action),
      };
    default:
      return { ...state };
  }
};

export default hallsReducer;
