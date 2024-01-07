import React from "react";
import MenuText from "../MenuText";
import style from "./Boton.module.css";

const Boton = ({ text, backgroundImage }) => {
  const botonStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "100% 70%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255)",
  };

  return (
    <div className={style.boton} style={botonStyle}>
      <MenuText className={style.MenuText} text={text} />
    </div>
  );
};

export default Boton;
