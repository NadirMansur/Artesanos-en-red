//import './App.css';
import style from './App.module.css'
import grupo from './grupo.jpg';
//import style from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import React from "react";
import {useState} from 'react';
import axios from 'axios';
import { error } from 'jquery';
import LogoYNombre from './components/LogoYNombre/LogoYNombre';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Landing from './components/Views/Landing';
import Home from './components/Views/Home';
import Abaut from './components/Views/Abaut';
import Productos from './components/Views/Productos';



function App() {

   return ( 
      <div className={style.app}>
         <div>
            <LogoYNombre/>
        </div>
         <Routes>
         <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/abaut" elemnet={<Abaut></Abaut>}></Route>
         <Route path="/productos" element={<Productos></Productos>}></Route>
         </Routes>

      </div>
   );
}

export default App;
