import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Art from "./components/art/Art";
import HomeArt from "./components/art/homeArt/HomeArt";
import ArtesanoGalery from "./components/artGalery/ArtGalery";
import EditGalery from "./components/editGalery/EditGalery";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GoogleCallback from "./components/sing/button/GoogleCallback";
import Sing from "./components/sing/singUpArt/Sing";
import User from "./components/user/user";

function App() {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("/detail/");

  return (
    <div>
      {isDetailPage ? "" : <Header />}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/detail/:id' element={<Art />}></Route>
        <Route path='/detail/galeria/:id/' element={<ArtesanoGalery />}></Route>
        <Route
          path='/detail/galeria/edit/:id/'
          element={<EditGalery />}
        ></Route>
        <Route path='/auth/google' />
        <Route path='/auth/google/callback' element={<GoogleCallback />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/login' element={<Sing />} />
        <Route path='/homeart' element={<HomeArt />} />
      </Routes>
    </div>
  );
}

export default App;
