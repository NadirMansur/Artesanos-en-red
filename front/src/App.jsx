import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Art from "./components/art/Art";
import GoogleCallback from "./components/sing/button/GoogleCallback";
import User from "./components/user/user";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/detail/:id' element={<Art />}></Route>
        <Route path='/auth/google' />
        <Route path='/auth/google/callback' element={<GoogleCallback/>} />
        <Route path='/user/:id' element={<User/>} />
      </Routes>
    </div>
  );
}

export default App;
