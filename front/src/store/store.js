import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./ducks/userDuck";
import artReducer from "./ducks/artDuck";
import errorsReducer from "./ducks/errorsDuck";
import rubroReducer from "./ducks/rubroDuck";
import artsReducer from "./ducks/artesanosDuck";

const rootReducer = combineReducers({
  user: userReducer,
  art: artReducer,
  errors: errorsReducer,
  rubro: rubroReducer,
  arts: artsReducer,
});

const store = configureStore({ reducer: { rootReducer } });

export default store;
