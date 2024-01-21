// userDuck.js

// Actions
const SET_USER = "user/SET_USER";

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
  console.log("action.type", action.type, "action.payload", action.payload);
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

// Thunks (acciones asíncronas)
export const fetchUserData = (googleId) => async (dispatch) => {
  console.log("ingrese a fetchUserData de thunks");
  try {
    const response = await fetch(
      `http://localhost:3001/user/getByGoogleId?googleId=${googleId}`
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
