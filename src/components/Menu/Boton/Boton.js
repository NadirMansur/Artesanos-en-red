import React from "react";
import MenuText from "../MenuText";
import style from "./Boton.module.css";

const Boton = ({ text, backgroundImage }) => {

  const botonStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={style.boton} style={botonStyle}>
      <MenuText className={style.MenuText} text={text} />
    </div>
  );
};

export default Boton;
