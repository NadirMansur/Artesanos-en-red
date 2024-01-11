import React from "react";
import GoogleButton from "react-google-button";

const GoogleButtonComponent = () => {
  const openGoogleLoginPopup = () => {
    console.log("Antes de enviar la respuesta openGoogleLoginPopup");

    // Abre una nueva ventana emergente con la URL de autenticación de Google
    const popup = window.open(
      "http://localhost:3001/auth/google",
      "Google Login",
      "width=500,height=600"
    );

    // Maneja el evento onLoad de la ventana emergente
    // Envía un mensaje a la ventana emergente después de que la autenticación ha sido exitosa
    popup.postMessage("googleLoginSuccess", "*");

    // Escucha el evento de mensaje desde la ventana emergente
    window.addEventListener("message", (event) => {
      const userData = event.data;

      if (userData) {
        // userData.user contiene la información del usuario
        //console.log("Información del usuario:", userData);
        //popup.close();
      }
    });
    console.log("Después  de enviar la respuesta openGoogleLoginPopup");
  };
  return (
    <GoogleButton label='ingresa con Google' onClick={openGoogleLoginPopup} />
  );
};

export default GoogleButtonComponent;
