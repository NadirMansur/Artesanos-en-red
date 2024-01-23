import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Art from "./components/art/Art";
import GoogleCallback from "./components/sing/button/GoogleCallback";
import User from "./components/user/user";
import SingIn from "./components/sing/singUpArt/singIn/SingIn";
import SingUp from "./components/sing/singUpArt/SingUp";
import Header from "./components/header/Header";

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail/");

  return (
    <div>
      {isDetailPage ? "" : <Header />}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/detail/:id' element={<Art />}></Route>
        <Route path='/auth/google' />
        <Route path='/auth/google/callback' element={<GoogleCallback />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/login' element={<SingIn />} />
        <Route path='/singup' element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
