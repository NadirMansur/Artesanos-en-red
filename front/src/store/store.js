import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./ducks/userDuck";
import artReducer from "./ducks/artDuck";
import * as thunk from "redux-thunk";
//import * as thunk from "redux-thunk";
//import thunk from 'redux-thunk/dist/redux-thunk.mjs';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const rootReducer = combineReducers({
  user: userReducer,
  art: artReducer,
});

const store = configureStore(
  { reducer: { rootReducer } }
  // composeWithDevTools(applyMiddleware(thunk))
);

export default store;
