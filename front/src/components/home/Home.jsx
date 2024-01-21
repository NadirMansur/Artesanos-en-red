import Header from "../header/Header";
import TituloSolDeMayo from "../header/TituloSolDeMayo/TituloSolDeMayo";
import Cards from "../cards/Cards";
import home from "./home.module.css";
import SignUpButton from "../sing/button/SignUpButton";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import UserButton from "../user/userButton";
import GoogleButtonComponent from "../sing/button/GoogleButtonComponent";

const Home = () => {
  const userInfo = useSelector((state) => state.rootReducer.user.user);
  console.log(userInfo);

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que userInfo cambie

    if (userInfo) {
      console.log("Data del usuario cargada:", userInfo);
      // Puedes realizar más acciones aquí si es necesario
    } else {
      console.log("La información del usuario es nula.");
      // Puedes realizar acciones específicas cuando la información del usuario es nula
    }
  }, [userInfo]);

  return (
    <div className={home["container"]}>
      <Header></Header>
      <div className={home["logo-singup"]}>
        <TituloSolDeMayo></TituloSolDeMayo>
        {userInfo ? (
          <UserButton
            id={userInfo.googleId}
            displayName={userInfo.displayName}
            photo={userInfo.photo}
          />
        ) : (
          <GoogleButtonComponent />
        )}
      </div>
      <Cards></Cards>
    </div>
  );
};
export default Home;
