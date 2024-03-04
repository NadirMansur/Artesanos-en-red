import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./ducks/userDuck";
import artReducer from "./ducks/artDuck";
import errorsReducer from "./ducks/errorsDuck";

const rootReducer = combineReducers({
  user: userReducer,
  art: artReducer,
  errors: errorsReducer,
});

const store = configureStore({ reducer: { rootReducer } });

export default store;
