// errorsDuck.js

// Actions
const SET_FORM_ERRORS_ART = "SET_FORM_ERRORS_ART";
const CLEAN_ERRORS_ART = "CLEAN_ERRORS_ART";
const SET_FORM_ERRORS_PROD = "SET_FORM_ERRORS_PROD";
const CLEAN_ERRORS_PROD = "CLEAN_ERRORS_PROD";

// Action Creators
export const setFormErrorsArt = (formErrorsArt) => ({
  type: SET_FORM_ERRORS_ART,
  payload: formErrorsArt,
});

export const cleanErrorsArt = () => ({
  type: CLEAN_ERRORS_ART,
});

export const setFormErrorsProd = (formErrorsProd) => ({
  type: SET_FORM_ERRORS_PROD,
  payload: formErrorsProd,
});

export const cleanErrorsProd = () => ({
  type: CLEAN_ERRORS_PROD,
});

// Reducer
const initialState = {
  formErrorsArt: {
    signUpEmail: "",
    tel: "",
    intro: "",
    img: "Debes subir una imagen para continuar",
    signUpPasswordRepeat: "",
    username: "",
    email: "",
  },
  formErrorsProd: {
    title: "",
    description: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    img: "Debes subir una imagen para continuar",
    rubro: "",
  },
};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_ERRORS_ART:
      return {
        ...state,
        formErrorsArt: action.payload,
      };
    case SET_FORM_ERRORS_PROD:
      return {
        ...state,
        formErrorsProd: action.payload,
      };
    case CLEAN_ERRORS_PROD:
      return {
        ...state,
        formErrorsProd: {
          title: "",
          description: "",
          tag1: "",
          tag2: "",
          tag3: "",
          tag4: "",
          img: "Debes subir una imagen para continuar",
          rubro: "",
        },
      };
    case CLEAN_ERRORS_ART:
      return {
        ...state,
        formErrorsArt: {
          signUpEmail: "",
          tel: "",
          intro: "",
          img: "",
          signUpPasswordRepeat: "",
          marca: "",
        },
      };
    default:
      return state;
  }
}

// funciones
export const setFormErrorsArtesano = (estado) => (dispatch) => {
  dispatch(setFormErrorsArt(estado));
};
export const setFormErrorsProducto = (estado) => (dispatch) => {
  dispatch(setFormErrorsProd(estado));
};
export const cleanFormErrorsArtesano = () => (dispatch) => {
  dispatch(cleanErrorsArt());
};
export const cleanFormErrorsProd = () => (dispatch) => {
  dispatch(cleanErrorsProd());
};
