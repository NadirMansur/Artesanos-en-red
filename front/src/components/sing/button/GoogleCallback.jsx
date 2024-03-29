import { useEffect, useState } from "react";
import LoadingSinper from "../../loading/LoadingSinper.jsx";
import { connect, useSelector } from "react-redux";
import { fetchUserData } from "../../../store/ducks/userDuck.js";
import { Link } from "react-router-dom";
import googleCallback from "./googleCallback.module.css";
import UserButton from "../../user/userButton.jsx";

const GoogleCallback = ({ fetchUserData }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    console.log("entro el useEffect");
    const googleId = new URLSearchParams(window.location.search).get(
      "googleId"
    );
    if (googleId) {
      console.log("entro al IF");
      fetchUserData(googleId)
        .then((userData) => {
          console.log("fetchUserData return userData", userData);
          setUserData(userData);
          console.log("Datos del usuario cargados exitosamente.");
        })
        .catch((error) => {
          console.error("Error al cargar datos del usuario:", error);
        });
    }
    //revisar si es posible recibir token por query
    // const token = new URLSearchParams(window.location.search).get("token");
    // if (token) {
    //     // Decodificar el token para obtener la información del usuario
    //     const decodedToken = jwt.decode(token);

    //     // Utilizar la información del usuario en la aplicación
    //     console.log("Información del usuario:", decodedToken.user);
    //   }
    // //revisar si es posible recibir token por query
  }, []);

  return (
    //REVISAR RESPONSIVE
    <div className={googleCallback["container"]}>
      <Link to='/'>
        <button>Volver a Home</button>
      </Link>
      <div className={googleCallback["sesion-info"]}>
        <h1>¡Bienvenido/a!</h1>
        <p>¡Has iniciado sesión como cliente de la página!</p>
        <div className={googleCallback["usuario-seccion"]}>
          <span>
            Tendrás la capacidad de guardar tus productos favoritos, y los
            mismos se guardaran en tu perfil de usuario{" "}
            {userData && (
              <UserButton
                id={userData.googleId}
                displayName={userData.displayName}
                photo={userData.photo}
              />
            )}
          </span>
          <span>
            ¡Explora, guarda y disfruta una experiencia única acompañada por
            nuestros Emprendedores!
          </span>
          <p>
            Gracias por elegirnos como tu destino de compras. Si tienes alguna
            pregunta o necesitas asistencia, nuestro equipo está aquí para
            ayudarte. ¡Feliz navegación!
          </p>
        </div>
      </div>
      {/* <LoadingSinper /> */}
    </div>
  );
};

export default connect(null, { fetchUserData })(GoogleCallback);
