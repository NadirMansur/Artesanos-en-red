import sing from "./singUp.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Galeria from "../../galeria/Galeria";
import Menu from "../../menu/Menu"
import img1 from "../../../assets/galeriaLogin/1.jpg";
import img2 from "../../../assets/galeriaLogin/2.jpg";
import img3 from "../../../assets/galeriaLogin/3.jpg";
import img4 from "../../../assets/galeriaLogin/4.jpg";
import img5 from "../../../assets/galeriaLogin/5.jpg";
import img6 from "../../../assets/galeriaLogin/6.jpg";
import img7 from "../../../assets/galeriaLogin/7.jpg";
import img8 from "../../../assets/galeriaLogin/8.jpg";
import img9 from "../../../assets/galeriaLogin/9.jpg";

const SignInUpComponent = () => {
  const [signUpData, setSignUpData] = useState({
    signUpName: "",
    signUpEmail: "",
    signUpPassword: "",
    tel: "",
    intro: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      //////////////////////logica de envio de formulario///////////////////////
      const formData = new FormData();
      formData.append("signUpName", signUpData.signUpName);
      formData.append("signUpEmail", signUpData.signUpEmail);
      formData.append("signUpPassword", signUpData.signUpPassword);
      formData.append("tel", signUpData.tel);
      formData.append("intro", signUpData.intro);
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:3001/art", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Imagen enviada correctamente");
      } else {
        console.error("Error al enviar la imagen");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    //////////////////////logica de envio de formulario///////////////////////
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {};

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
          link={["/","/login"]}
          text={["Home", "Login"]}
          />
          <div className={sing["container"]}>
            <span className={sing["span"]}>
              Si no tienes usuario emprendedor puedes crearte una aquí. El
              usuario debe ser dado de alta para publicar y poder ser mostrado
              en l pagina principal.
            </span>
            <h2 className={sing["h2"]}>Crear Usuario Emprendedor</h2>
            <form onSubmit={handleSignUpSubmit} className={sing["form"]}>
              <input
                className={sing["input"]}
                type='text'
                name='signUpName'
                placeholder='Nombre de Usuario'
                value={signUpData.signUpName}
                onChange={handleSignUpChange}
              />
              <input
                className={sing["input"]}
                type='email'
                name='signUpEmail'
                placeholder='Email'
                value={signUpData.signUpEmail}
                onChange={handleSignUpChange}
              />
              <input
                className={sing["input"]}
                type='password'
                name='signUpPassword'
                placeholder='Password'
                value={signUpData.signUpPassword}
                onChange={handleSignUpChange}
              />
              <input
                className={sing["input"]}
                type='text'
                name='tel'
                placeholder='tel'
                value={signUpData.tel}
                onChange={handleSignUpChange}
              />
              <input
                className={sing["input"]}
                type='text'
                name='intro'
                placeholder='Introduccion a tu perfil'
                value={signUpData.intro}
                onChange={handleSignUpChange}
              />
              <h1>Subir imagen</h1>
              <input
                type='file'
                onChange={handleFileChange}
                className={sing["input"]}
              />
              <button onClick={handleFileUpload}>Subir</button>
              <button type='submit'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default SignInUpComponent;
