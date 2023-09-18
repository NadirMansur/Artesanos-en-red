import style from "../Productos/Productos.module.css";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";
import p4 from "./p4.jpg";
import p5 from "./p5.jpg";
import p6 from "./p6.png";
import p7 from "./p7.jpg";
import HomeNav from "./HomeNav";
import Footer from "./Footer";
const Productos = () => {
  return (
    <div className={style.productos}>
      <HomeNav></HomeNav>
      <div>
        <a href='https://postimg.cc/QFqGt3VV' target='_blank'>
          <img
            className={style.image}
            src='https://i.postimg.cc/VkxYKs89/banner-2.jpg'
            border='0'
            alt='banner-2'
          />
        </a>
        <h1 className={style.tituloh1}>PRODUCTOS:</h1>
        {/* ACA IRIA UN MAP DE LOS PRODUCTOS */}
        <div className={style.producto}>
          <div className={style.foto}>
            <img className={style.imagen} src={p1} alt='producto 1'></img>
          </div>
          <div className={style.fotoEinfo}>
            <div className={style.fotos}>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p2} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p3} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p4} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p5} alt='producto 1'></img>
              </div>
            </div>
            <div className={style.info}>
              <spam>
                INFO: ACA VA TODA LA INFO DEL PRODUCTO, PRECIO, Y LINK DE COMPRA
              </spam>
            </div>
          </div>
        </div>
        {/**PRODUCTO 2 DE PRUBA */}
        <div className={style.producto}>
          <div className={style.foto}>
            <img
              className={style.imagenFondo}
              src={p7}
              alt='foto de fondo P7'
            ></img>
            <img className={style.imagenNoFondo} src={p6} alt='foto p6'></img>
          </div>
          <div className={style.fotoEinfo}>
            <div className={style.fotos}>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p2} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p3} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p4} alt='producto 1'></img>
              </div>
              <div className={style.fotoChiquita}>
                <img className={style.imagen} src={p5} alt='producto 1'></img>
              </div>
            </div>
            <div className={style.info}>
              <spam>
                INFO: ACA VA TODA LA INFO DEL PRODUCTO, PRECIO, Y LINK DE COMPRA
              </spam>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Productos;
