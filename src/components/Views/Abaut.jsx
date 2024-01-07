import Footer from "./Footer";
import MenuFotos from "../Menu/Menu";
import style from "./About.module.css";
import TituloTexto from "../tituloTexto/tituloTexto";
const Abaut = () => {
  const titulosTextos = [
    {
      titulo: "Historia del Artesano",
      texto:
        "Soy Juan Pérez, un apasionado artesano de origen mexicano. Mi historia en el mundo de la artesanía comenzó hace más de dos décadas, cuando descubrí mi amor por trabajar con las manos y crear piezas únicas. Mi abuelo fue mi primera inspiración; sus habilidades como artesano y su amor por la tradición artesanal me guiaron en este hermoso viaje.",
    },
    {
      titulo: "Filosofía de Trabajo",
      texto:
        "En mi taller, la artesanía es más que un oficio; es una forma de vida. Mi filosofía se basa en el respeto por los materiales naturales y la atención meticulosa a los detalles. Cada pieza que creo es una manifestación de mi pasión por la artesanía y mi compromiso con la calidad. Utilizo materiales sostenibles siempre que sea posible y me enorgullece crear productos que perduren en el tiempo.",
    },
    {
      titulo: "Proceso de Creación",
      texto:
        "Mi proceso de creación es una danza de creatividad y habilidad. Desde seleccionar cuidadosamente los materiales hasta dar forma a cada pieza a mano, cada etapa es un acto de amor por la artesanía. Siempre busco nuevas técnicas y enfoques para enriquecer mi trabajo y ofrecer a mis clientes productos únicos y hermosos.",
    },
    {
      titulo: "Eventos y Exposiciones",
      texto:
        "A lo largo de mi carrera, he tenido el privilegio de exhibir mis creaciones en ferias de artesanía y exposiciones locales. Es un honor compartir mi trabajo con la comunidad y conocer a personas apasionadas por la artesanía como yo.",
    },
    {
      titulo: "Compromiso con la Comunidad",
      texto:
        "No solo me dedico a mi taller; también creo vínculos con mi comunidad. Colaboro con organizaciones benéficas locales y ofrezco talleres de artesanía para niños, inspirando a las generaciones futuras a apreciar y preservar nuestras tradiciones artesanales.",
    },
  ];

  return (
    <div className={style.about}>
      <div className={style.nav}>
        <MenuFotos></MenuFotos>
      </div>
      <div className={style.columna}>
        <a>
          <img
            className={style.image}
            src='https://i.postimg.cc/VkxYKs89/banner-2.jpg'
            border='0'
            alt='banner-2'
          />
        </a>
        <div className={style.tablaFila}>
          <div className={style.tabla}>
            <div className={style.filaAbout}>
              <div className={style.contenedor}>
                <div className={style.text}>Sobre Mi</div>
              </div>
            </div>
            <div className={style.fila1}>
              <TituloTexto
                titulo={titulosTextos[0].titulo}
                texto={titulosTextos[0].texto}
              ></TituloTexto>
              <TituloTexto
                titulo={titulosTextos[1].titulo}
                texto={titulosTextos[1].texto}
              ></TituloTexto>
            </div>
            <div className={style.fila2}>
              <TituloTexto
                titulo={titulosTextos[2].titulo}
                texto={titulosTextos[2].texto}
              ></TituloTexto>
              <TituloTexto
                titulo={titulosTextos[3].titulo}
                texto={titulosTextos[3].texto}
              ></TituloTexto>
            </div>
            <div className={style.fila3}>
              <TituloTexto
                titulo={titulosTextos[4].titulo}
                texto={titulosTextos[4].texto}
              ></TituloTexto>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Abaut;
