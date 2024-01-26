import sing from "../singUpForm.module.css";
import React, { useState } from "react";

const SingInForm = () => {
  const [signInData, setSignInData] = useState({
    singInUsername: "",
    signInPassword: "",
  });
  const [response, setResponse] = useState({
    status: null,
    message: "",
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
        const { status, message } = await response.json();
        console.log("status", status, "message", message);
        setResponse({
          status: status,
          message: message,
        });
      } else {
        console.error("Error al iniciar secion");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    //////////////////////logica de envio de formulario///////////////////////
  };
  return (
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
        {!response.status ? (
          <span className={sing["span-alert"]}>{response.message}</span>
        ) : null}
        <button className={sing["button"]} type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SingInForm;
