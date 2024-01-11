import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Art from "./components/art/Art";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path = "/detail/:id" element={<Art/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
