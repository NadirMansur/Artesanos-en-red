import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import abaut from "./abaut.jpg";
import productos from "./productos.jpg";

const HomeNav = () => {
  return (
    <div className={style.contenedor}>
      <div>
        <div className={style.contenedorImagen}>
          <div className={style.texto}>
            <h2>Abaut</h2>
          </div>
          <Link to='/abaut'>
            <img className={style.imagen} src={abaut} alt='abaut'></img>
          </Link>
        </div>
      </div>
      <div>
        <div className={style.contenedorImagen}>
          <div className={style.texto}>
            <h2>Prod.</h2>
          </div>
          <Link to='/productos'>
            <img className={style.imagen} src={productos} alt='productos'></img>
          </Link>
        </div>
      </div>
      <div>
        <div className={style.contenedorImagen}>
          <div className={style.texto}>
            <h2>Taller</h2>
          </div>
          <Link to='/productos'>
            <img
              className={style.imagen}
              src='https://previews.123rf.com/images/rawpixel/rawpixel1610/rawpixel161036630/64257618-carpintero-artesano-artesan%C3%ADa-de-madera-concepto-taller.jpg'
              alt='taller'
            ></img>
          </Link>
        </div>
      </div>
      <div>
        <div className={style.contenedorImagen}>
          <div className={style.texto}>
            <h2>Ferias</h2>
          </div>
          <Link to='/productos'>
            <a href='https://imgur.com/d18zYQH'>
              <img
                className={style.imagen}
                src='https://i.imgur.com/d18zYQH.jpg'
                title='source: imgur.com'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
