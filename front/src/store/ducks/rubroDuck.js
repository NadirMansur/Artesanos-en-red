// userDuck.js

// Actions
const SET_RUBRO = "SET_RUBRO";

// Action Creators
export const setRubro = (rubro) => ({
  type: SET_RUBRO,
  payload: rubro,
});

// Reducer
const initialState = {
  rubro: null,
};

export default function rubroReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RUBRO:
      return {
        ...state,
        rubro: action.payload,
      };
    default:
      return state;
  }
}
