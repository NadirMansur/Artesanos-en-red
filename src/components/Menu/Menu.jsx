import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import Boton from "./Boton/Boton";

const MenuFotos = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedor1}>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            backgroundImage={
              "https://res.cloudinary.com/df1h3xxj9/image/upload/v1697744091/grlaw1kjg6qhugrbz9ab.png"
            }
            text='Prod '
          ></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            backgroundImage={
              "https://res.cloudinary.com/df1h3xxj9/image/upload/v1697743035/wiywd93asnwpdropzxq4.png"
            }
            text='Taller '
          ></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            text='Ferias '
            backgroundImage={"https://res.cloudinary.com/df1h3xxj9/image/upload/v1697742089/fmq6vi0jqihvovbnguk5.png"}
          ></Boton>
        </Link>
      </div>
    </div>
  );
};

export default MenuFotos;
