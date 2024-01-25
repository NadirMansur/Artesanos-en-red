import sing from "../singUpForm.module.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Menu from "../../../menu/Menu";
import Galeria from "../../../galeria/Galeria";
import SuccessLogin from "../success/SuccessLogin"
import { Link } from "react-router-dom";
import img1 from "../../../../assets/galeriaLogin/1.jpg";
import img2 from "../../../../assets/galeriaLogin/2.jpg";
import img3 from "../../../../assets/galeriaLogin/3.jpg";
import img4 from "../../../../assets/galeriaLogin/4.jpg";
import img5 from "../../../../assets/galeriaLogin/5.jpg";
import img6 from "../../../../assets/galeriaLogin/6.jpg";
import img7 from "../../../../assets/galeriaLogin/7.jpg";
import img8 from "../../../../assets/galeriaLogin/8.jpg";
import img9 from "../../../../assets/galeriaLogin/9.jpg";

const SignInUpComponent = () => {
  const location = useLocation();
  console.log("location.state", location.state);
  const [signInData, setSignInData] = useState({
    singInUsername: "",
    signInPassword: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      //////////////////////logica de envio de formulario///////////////////////
      console.log(signInData.singInUsername);
      console.log(signInData.signInPassword);
      console.log("signInData", signInData);

      const response = await fetch("http://localhost:3001/art/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
      console.log("response", response);
      if (response.ok) {
        console.log("Imagen enviada correctamente");
      } else {
        console.error("Error al iniciar secion");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    //////////////////////logica de envio de formulario///////////////////////
  };

  return (
    <div className={sing["fila"]}>
      <Galeria
        galeria={[
          [img1, img2, img3],
          [img4, img5, img6],
          [img7, img8, img9],
        ]}
      />
      <div className={sing["container-buttons"]}>
        <Menu
          link={["/", "/singup"]}
          text={["Home", "Crear usuario Emprendedor"]}
        />
        {location.state ? <SuccessLogin state={location.state.newArt} /> : null}
        <div className={sing["container"]}>
          <h2 className={sing["h2"]}>Ingresar como Emprendedor</h2>
          <form onSubmit={handleSignInSubmit} className={sing["form"]}>
            <input
              className={sing["input"]}
              type='text'
              name='singInUsername'
              placeholder='Nombre'
              value={signInData.singInUsername}
              onChange={handleSignInChange}
              required
            />
            <input
              className={sing["input"]}
              type='password'
              name='signInPassword'
              placeholder='Password'
              value={signInData.signInPassword}
              onChange={handleSignInChange}
              required
            />
            <button className={sing["button"]} type='submit'>
              Sign In
            </button>
          </form>
        </div>
      </div>
      {/* <SingUp/> */}
    </div>
  );
};

export default SignInUpComponent;
