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

const newArt = {
  status: false,
  id: 21,
  username: "prueba9",
  tel: "2235162544",
  email: "nadirmansur89@gmail.com",
  password: "$2b$10$VTPAjoeXlIVRz/WjkZjx0.zjHtHFTovUG38XYy.lb4/g/fhZedUDy",
  img_perfil:
    "https://res.cloudinary.com/df1h3xxj9/image/upload/v1706199456/ysoksvad7aye5jdpfa9q.jpg",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus neque. Suspendisse potenti. Suspendisse nec justo eu massa convallis sodales. Vestibulum ultrices, ex at tincidunt tincidunt, mauris justo commodo libero, non ullamcorper elit tortor non turpis. In hac habitasse platea dictumst.",
  updatedAt: "2024-01-25T16:17:38.413Z",
  createdAt: "2024-01-25T16:17:38.413Z",
  deletedAt: null,
};
