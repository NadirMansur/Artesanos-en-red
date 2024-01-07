import style from "../Productos/Productos.module.css";
import MenuFotos from "../Menu/Menu";
import Footer from "./Footer";
import WhatsAppButton from "../WsButton/WhatsAppButton";
const producto = "algunproducto";
import db from "../../dbMock";

const Productos = () => {
  const number = 542235481529;
  const mensaje =
    "Hola!%20he%20visitado%20tu%20pagina,%20y%20me%20interesa%20este%20prodcuto:%20";
  return (
    <div className={style.productos}>
      <div className={style.nav}>
        <MenuFotos></MenuFotos>
      </div>
      <div>
        <a>
          <img
            className={style.image}
            src='https://i.postimg.cc/VkxYKs89/banner-2.jpg'
            border='0'
            alt='banner-2'
          />
        </a>
        <div className={style.tituloh1}>
          <h1>PRODUCTOS:</h1>
        </div>
        {db.map((juego) => (
          <div className={style.producto} key={juego.info.name}>
            <div className={style.foto}>
              <img
                className={style.imagenFondo}
                src={juego.imgs[1]}
                alt='img1'
              ></img>
              <img
                className={style.imagenNoFondo}
                src={juego.imgs[0]}
                alt='img1SinFodo'
              ></img>
            </div>
            <div className={style.fotoEinfo}>
              <div className={style.fotos}>
                {juego.imgs[2].imagenesPequeñas.map((linkFoto) => (
                  <div className={style.fotoChiquita} key={linkFoto}>
                    <img
                      className={style.imagen}
                      src={linkFoto}
                      alt='fotoChiquita'
                    ></img>
                  </div>
                ))}
              </div>
              <div className={style.info}>
                <spam>
                  <div>{juego.info.description}</div>
                  <div>
                    <div>Instrucciones:</div>
                    <div>{juego.info.instucciones}</div>
                  </div>
                  <div>
                    <WhatsAppButton
                      number={number}
                      mensaje={mensaje}
                      producto={juego.info.name}
                    ></WhatsAppButton>
                    <br></br>
                  </div>
                </spam>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Productos;
