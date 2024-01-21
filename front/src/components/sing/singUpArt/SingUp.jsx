import singUp from "./singUp.module.css";
import React, { useState } from "react";

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
    <div  className={singUp["container"]}>
      <h2>Crear Usuario Emprendedor</h2>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type='text'
          name='signUpName'
          placeholder='Nombre de Usuario'
          value={signUpData.signUpName}
          onChange={handleSignUpChange}
        />
        <input
          type='email'
          name='signUpEmail'
          placeholder='Email'
          value={signUpData.signUpEmail}
          onChange={handleSignUpChange}
        />
        <input
          type='password'
          name='signUpPassword'
          placeholder='Password'
          value={signUpData.signUpPassword}
          onChange={handleSignUpChange}
        />
        <input
          type='text'
          name='tel'
          placeholder='tel'
          value={signUpData.tel}
          onChange={handleSignUpChange}
        />
        <input
          type='text'
          name='intro'
          placeholder='Introduccion a tu perfil'
          value={signUpData.intro}
          onChange={handleSignUpChange}
        />
        <h1>Subir imagen</h1>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Subir</button>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignInUpComponent;
