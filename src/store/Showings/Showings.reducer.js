import {
  ADD_SHOWING,
  ADD_SHOWING_SUCCESS,
  FETCH_SHOWINGS,
  FETCH_SHOWINGS_FAIL,
  FETCH_SHOWINGS_SUCCESS,
  UPDATE_SHOWING_SUCCESS,
} from "./Showings.types";

const INITIAL_STATE = {
  showings: [],
  loading: false,
};

const updateShowingsArray = (state, action) => {
  const newIndex = state.showings.findIndex(
    (showing) => showing.id === action.showing.id
  );
  const newArray = [...state.showings];
  newArray.splice(newIndex, 1, action.showing);

  return [...newArray];
};

const showingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHOWINGS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOWINGS_SUCCESS:
      return {
        ...state,
        showings: action.showings,
        loading: false,
      };
    case FETCH_SHOWINGS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ADD_SHOWING_SUCCESS:
      return {
        ...state,
        showings: state.showings.concat(action.showing),
      };
    case UPDATE_SHOWING_SUCCESS:
      return {
        ...state,
        showings: updateShowingsArray(state, action),
      };
    default:
      return { ...state };
  }
};

export default showingsReducer;
