import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.artesano}>
        <h3 className={style.artesan}>Artesana/o</h3>
        <div>
          <h6>Contacto</h6>
        </div>
        <a href='https://wa.link/v8i029'>
          {" "}
          <h6>Whatsapp: +54 9 223 548-1529</h6>
        </a>
        <h6>Correo: monicalauralopez86@gmail.com</h6>
        <Link to='/abaut'>
          <h6> Sobre Mi</h6>
        </Link>
      </div>
      <div className={style.desarrollador}>
        <h3 className={style.artesan}>Desarrollador</h3>
        <div>
          <h6>Nadir Mansur</h6>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nadir-mansur-a36372206/'>
            {" "}
            <h6>Linkedin</h6>
          </a>
        </div>
        <div>
          <a href='https://github.com/NadirMansur'>
            {" "}
            <h6>GitHub</h6>
          </a>
        </div>
        <div>
          <h6>Discord: Atahualpa_Estudio#0463</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
