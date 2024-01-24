import sing from "../singUpForm.module.css";
import React, { useState } from "react";
import Header from "../../../header/Header";
import SingUp from "../SingUp";
import Menu from "../../../menu/Menu";
import Galeria from "../../../galeria/Galeria";
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
  const [signInData, setSignInData] = useState({
    signInEmail: "",
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
      const formData = new FormData();
      formData.append("signUpEmail", signInData.signInEmail);
      formData.append("signUpPassword", signInData.signInPassword);
      const response = await fetch("http://localhost:3001/art/login", {
        method: "POST",
        body: formData,
      });
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
        <div className={sing["container"]}>
          <h2 className={sing["h2"]}>Ingresar como Emprendedor</h2>
          <form onSubmit={handleSignInSubmit} className={sing["form"]}>
            <input
              className={sing["input"]}
              type='email'
              name='signInEmail'
              placeholder='Email'
              value={signInData.signInEmail}
              onChange={handleSignInChange}
            />
            <input
              className={sing["input"]}
              type='password'
              name='signInPassword'
              placeholder='Password'
              value={signInData.signInPassword}
              onChange={handleSignInChange}
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
