import React from "react";
import style from "./MenuText.module.css";

const MenuText = ({ text }) => {
  return (
    <div className={style.contenedor}>
      <div className={style.text}>
        {text}
      </div>
    </div>
  );
};
export default MenuText;
