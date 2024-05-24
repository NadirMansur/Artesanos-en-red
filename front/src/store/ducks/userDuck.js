// userDuck.js

// Actions
const SET_USER = "SET_USER";

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// Reducer
const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      console.log("Usuario actualizado en el estado:", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

const endpointGetUserByGoogleId = import.meta.env.VITE_GET_USER_BY_GOOGLE_ID;

// Thunks (acciones asíncronas)
export const fetchUserData = (googleId) => async (dispatch) => {
  console.log("ingrese a fetchUserData de thunks");
  try {
    const response = await fetch(
      `${endpointGetUserByGoogleId}googleId=${googleId}`
    );
    console.log("response", response);
    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("antes dispatch con userData", userData);
      dispatch(setUser(userData));
      console.log("después dispatch con userData", userData);
      return userData;
    } else {
      // Manejar el caso de respuesta no exitosa (puedes lanzar un error o realizar alguna acción específica)
      console.error("Error en la respuesta del servidor:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
