// artesanosDuck.js

// Actions
const SET_ARTS = "user/SET_ARTS";
// Action Creators
export const setArts = (arts) => ({
  type: SET_ARTS,
  payload: arts,
});
// Reducer
const initialState = {
  arts: null,
};
export default function artsReducer(state = initialState, action) {
  //console.log("action.type", action.type, "action.payload", action.payload);
  switch (action.type) {
    case SET_ARTS:
      return {
        ...state,
        arts: action.payload,
      };
    default:
      return state;
  }
}

const endpointgetArts = import.meta.env.VITE_GET_ARTS;

// Thunks (acciones asíncronas)
export const fetchArtsData = () => async (dispatch) => {
  console.log("ingrese a fetchArtsData de thunks");
  try {
    const response = await fetch(endpointgetArts);
    console.log("response", response);
    if (response.ok) {
      const artsData = await response.json();
      localStorage.setItem("ArtsData", JSON.stringify(artsData));
      dispatch(setArts(artsData));
      return artsData;
    } else {
      console.error("Error en la respuesta del servidor:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching art data:", error);
  }
};