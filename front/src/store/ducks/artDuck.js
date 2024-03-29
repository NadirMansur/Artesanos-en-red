// artDuck.js

// Actions
const SET_ART = "user/SET_ART";
const SET_ART_LOGIN_DATA = "user/SET_ART_LOGIN_DATA";

// Action Creators
export const setArt = (art) => ({
  type: SET_ART,
  payload: art,
});

export const setArtLoginData = (artLoginData) => ({
  type: SET_ART_LOGIN_DATA,
  payload: artLoginData,
});

// Reducer
const initialState = {
  art: null,
  artLoginData: null,
};

export default function artReducer(state = initialState, action) {
  //console.log("action.type", action.type, "action.payload", action.payload);
  switch (action.type) {
    case SET_ART:
      return {
        ...state,
        art: action.payload,
      };
    case SET_ART_LOGIN_DATA:
      return {
        ...state,
        artLoginData: action.payload,
      };
    default:
      return state;
  }
}

const endpointById = import.meta.env.VITE_GET_ART_BY_ID;
const endpointLoginArt = import.meta.env.VITE_LOGIN_ART;
const endpointRubroById = import.meta.env.VITE_GET_RUBROS_BY_ID;
const endpointProdArt = import.meta.env.VITE_GET_PRODS_BY_ID


// Thunks (acciones asíncronas)
export const fetchArtData = async (id) => {
  console.log("ingrese a fetchUserArt de thunks");
  try {
    const response = await fetch(`${endpointById}id=${id}`);
    console.log("response", response);
    if (response.ok) {
      const artData = await response.json();
      console.log("artData", artData);
      localStorage.setItem("ArtData", JSON.stringify(artData));
      //console.log("antes dispatch con userData", artData);
      //console.log("después dispatch con userData", artData);
      return artData;
    } else {
      // Manejar el caso de respuesta no exitosa (puedes lanzar un error o realizar alguna acción específica)
      console.error("Error en la respuesta del servidor:", response.statusText);
      return {
        status: false,
        message: response.text(),
      };
    }
  } catch (error) {
    console.error("Error fetching art data:", error);
    return { status: false, message: error.message };
  }
};

export const fetchRubrosById = async (id) => {
  try {
    const response = await fetch(`${endpointRubroById}id=${id}`);
    if (response.ok) {
      const rubros = await response.json();
      localStorage.setItem("Rubros", JSON.stringify(rubros));
      return rubros;
    } else {
      console.error("Error en la respuesta del servidor:", response.statusText);
      return {
        status: false,
        message: response.text(),
      };
    }
  } catch (error) {
    console.error("Error fetching art data:", error);
    return { status: false, message: error.message };
  }
};

export const fetchProdsById = async (id) => {
  try {
    const response = await fetch(`${endpointProdArt}id=${id}`);
    if (response.ok) {
      const prods = await response.json();
      localStorage.setItem("Prods", JSON.stringify(prods));
      return prods;
    } else {
      console.error("Error en la respuesta del servidor:", response.statusText);
      return {
        status: false,
        message: response.text(),
      };
    }
  } catch (error) {
    console.error("Error fetching art data:", error);
    return { status: false, message: error.message };
  }
};

export const fetchArtLogin = (username, password) => async (dispatch) => {
  console.log("ingrese a fetchArtLogin de thunks");
  try {
    const response = await fetch(
      //se esta realizando la ruta de Login art
      endpointLoginArt,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      }
    );
    //se esta realizando la ruta de Login art

    //console.log("response", response);
    if (response.ok) {
      const artLoginData = await response.json();
      //console.log("antes dispatch con userData", artData);
      dispatch(setArtLoginData(artLoginData));
      //console.log("después dispatch con userData", artData);
      return artLoginData;
    } else {
      // Manejar el caso de respuesta no exitosa (puedes lanzar un error o realizar alguna acción específica)
      console.error("Error en la respuesta del servidor:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching artLogin data:", error);
  }
};

export const setArtLogin = (estado) => (dispatch) => {
  dispatch(setArtLoginData(estado));
};
