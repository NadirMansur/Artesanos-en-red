import sing from "./singUp.module.css";

import Galeria from "../../galeria/Galeria";
import SingUpForm from "./SingUpForm";
import Menu from "../../menu/Menu";

import { useLocation } from 'react-router-dom';

import img1 from "../../../assets/galeriaLogin/1.jpg";
import img2 from "../../../assets/galeriaLogin/2.jpg";
import img3 from "../../../assets/galeriaLogin/3.jpg";
import img4 from "../../../assets/galeriaLogin/4.jpg";
import img5 from "../../../assets/galeriaLogin/5.jpg";
import img6 from "../../../assets/galeriaLogin/6.jpg";
import img7 from "../../../assets/galeriaLogin/7.jpg";
import img8 from "../../../assets/galeriaLogin/8.jpg";
import img9 from "../../../assets/galeriaLogin/9.jpg";

const Sign = () => {
 // const location = useLocation();

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
        <Menu link={["/", "/login"]} text={["Home", "Login"]} />
        <SingUpForm />
      </div>
    </div>
  );
};

export default Sign;
