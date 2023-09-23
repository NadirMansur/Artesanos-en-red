import React from "react";
import MenuText from "../MenuText";
import style from "./Boton.module.css";

const Boton = ({ text }) => {
  return (
    <div className={style.boton}>
      <MenuText className={style.MenuText} text={text} />
    </div>
  );
};

export default Boton;
