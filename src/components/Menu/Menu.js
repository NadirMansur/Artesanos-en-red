import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import Boton from "./Boton/Boton"

const MenuFotos = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedor1}>
        <Link style={{ textDecoration: "none" }} t='/abaut'>
         <Boton className={style.boton1} text="Sobre Mi "></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
         <Boton text="Prod "></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
         <Boton text="Taller "></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
         <Boton text="Ferias "></Boton>
        </Link>
      </div>
    </div>
  );
};

export default MenuFotos;
