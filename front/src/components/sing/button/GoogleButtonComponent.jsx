import React from "react";
import GoogleButton from "react-google-button";
import axios from "axios";

const GoogleButtonComponent = () => {
  const redirectToGoogleLogin = async () => {
    // Abre una nueva ventana emergente con la URL de autenticación de Google
    window.location.href = "http://localhost:3001/auth/google";
  };
  return (
    <GoogleButton label='Cómo Cliente' onClick={redirectToGoogleLogin} />
  );
};

export default GoogleButtonComponent;
