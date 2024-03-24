import sing from "./sing.module.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import SingInForm from "./singIn/SingInForm";
import SingUpForm from "./SingUpForm";
import ExportedSuccessCreate from "./success/SuccessLogin";
import Galeria from "../../galeria/Galeria";
import Menu from "../../menu/Menu";

import img1 from "../../../assets/galeriaLogin/1.jpg";
import img2 from "../../../assets/galeriaLogin/2.jpg";
import img3 from "../../../assets/galeriaLogin/3.jpg";
import img4 from "../../../assets/galeriaLogin/4.jpg";
import img5 from "../../../assets/galeriaLogin/5.jpg";
import img6 from "../../../assets/galeriaLogin/6.jpg";
import img7 from "../../../assets/galeriaLogin/7.jpg";
import img8 from "../../../assets/galeriaLogin/8.jpg";
import img9 from "../../../assets/galeriaLogin/9.jpg";

const Sing = () => {
  const location = useLocation();
  //console.log("location.state", location.state);
  const [singIn, setSingIn] = useState(true);
  const handleClick = (boolean) => {
    setSingIn(boolean);
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
      <div className={sing["container-menu-comp"]}>
        <Menu link={["/"]} text={["Home"]} />
        {location.state && location.state.newArt && (
          <ExportedSuccessCreate state={location.state.newArt} />
        )}
        <div className={sing["container-options"]}>
          <div className={sing["container-buttons"]}>
            <button
              className={sing["sing-in"]}
              onClick={() => {
                handleClick(true);
              }}
            >
              Login
            </button>
            <button
              className={sing["sing-in"]}
              onClick={() => {
                handleClick(false);
              }}
            >
              Crear Usuario
            </button>
          </div>
          {singIn ? <SingInForm /> : <SingUpForm />}
        </div>
      </div>
      {/* <SingUp/> */}
    </div>
  );
};

export default Sing;
