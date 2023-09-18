import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import LogoYNombre from "../LogoYNombre/LogoYNombre";

const Landing = () => {
  return (
    <div>
      <div>
        <LogoYNombre />
      </div>
      <div className={style.layout}>
        <div className={style.body}>
          <div>
            <h3>
              Bienvenido a Moniguetes Juegos! aqui podras encontrar distintos
              juegos didacticos e informacion sobre las artesanias
            </h3>
          </div>
          <div>
            <h3>¡A por ello!</h3>
          </div>
          <Link to='/abaut'>
            <button className={style.button}> Entrar!</button>
          </Link>
        </div>
        <div>
          <Footer className={style.footer}></Footer>
        </div>
      </div>
    </div>
  );
};
export default Landing;
