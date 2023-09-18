//import './App.css';
import style from "./App.module.css";
import grupo from "./grupo.jpg";
//import style from './App.module.css';
import Nav from "./components/Nav/Nav.jsx";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { error } from "jquery";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./components/Views/Landing";
import Home from "./components/Views/HomeNav";
import Abaut from "./components/Views/Abaut";
import Productos from "./components/Views/Productos";

function App() {
  return (
    <div className={style.app}>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/abaut' element={<Abaut></Abaut>}></Route>
      </Routes>
    </div>
  );
}

export default App;
