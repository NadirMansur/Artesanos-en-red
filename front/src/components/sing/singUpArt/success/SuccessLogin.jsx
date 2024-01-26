import sing from "../success/successLogin.module.css";
import React, { useState } from "react";
import AvatarPerfil from "../../../card/perfilCard/avatarPerfil/AvatarPerfil";
const SuccessLogin = (props) => {
  console.log(props);
  const { state } = props;
  const [art, setArt] = useState({
    status: state.status,
    id: state.id,
    username: state.username,
    tel: state.tel,
    email: state.email,
    img_perfil: state.img_perfil,
  });

  return (
    <div className={sing["container"]}>
      <h2 className={sing["h2"]}>Se creó usuario satisfactoriamente</h2>
      <h4 className={sing["h4"]}>Para poder publicar productos debes ser dado de alta por el administrador</h4>
      <h4 className={sing["h4"]}>
        Una vez dado de alta vas a ingresar con tu nombre de usuario{" "}
        <div className={sing["container-usuario"]}>
          <div className={sing["container-h2"]}>
            <h2 className={sing["h2"]}>{art.username}</h2>
          </div>
          <AvatarPerfil img={art.img_perfil} />
        </div>
        y tu contraseña!!!
      </h4>
    </div>
  );
};

export default SuccessLogin;