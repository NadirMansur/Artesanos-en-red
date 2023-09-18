import Footer from "./Footer";
import HomeNav from "./HomeNav";
import style from "./About.module.css";

// Historia del Artesano: Comienza con una breve introducción sobre quién es el artesano, su nombre, su origen y una breve historia personal que lo llevó a convertirse en artesano. Puedes incluir detalles como su formación, inspiraciones y experiencia en el mundo de la artesanía.

// Filosofía de Trabajo: Describe la filosofía o enfoque de trabajo del artesano. ¿Qué valores o principios guían su proceso creativo y la producción de sus productos? Esto puede incluir el uso de materiales sostenibles, la atención a los detalles o el compromiso con la calidad.

// Proceso de Creación: Detalla el proceso de creación de los productos artesanales. Puedes incluir fotografías o videos que muestren los pasos involucrados en la elaboración de sus productos. Esto ayudará a los visitantes a comprender el esfuerzo y la habilidad que se requiere.

// Productos: Muestra una galería de los productos que el artesano vende. Cada producto debe ir acompañado de una breve descripción, incluyendo materiales utilizados, tamaños disponibles, precios y cualquier detalle especial. Puedes organizar los productos por categorías si es relevante.

// Testimonios o Reseñas: Si el artesano ha recibido comentarios positivos de clientes satisfechos, puedes incluir algunas reseñas o testimonios que respalden la calidad de sus productos y su servicio al cliente.

// Eventos y Exposiciones: Si el artesano ha participado en ferias, exposiciones o eventos relacionados con la artesanía, menciona algunos de los eventos más destacados en los que ha estado presente.

// Compromiso con la Comunidad: Si el artesano está involucrado en actividades comunitarias, organizaciones benéficas o proyectos sociales relacionados con su oficio, esta es una sección relevante para destacar su compromiso social.

// Contacto: Proporciona información de contacto, como dirección de correo electrónico, número de teléfono y redes sociales, para que los visitantes puedan comunicarse con el artesano y hacer preguntas o realizar pedidos.

// Preguntas Frecuentes (FAQ): Si sueles recibir preguntas comunes de tus clientes o visitantes, considera incluir una sección de preguntas frecuentes para responder a estas consultas de manera anticipada.

// Fotografía del Artesano: Agrega una foto del artesano, preferiblemente una que lo muestre trabajando en su taller o creando sus productos. Esto ayuda a establecer una conexión personal con los visitantes.

const Abaut = () => {
  return (
    <div className={style.about}>
      <div className={style.nav}>
        <HomeNav></HomeNav>
      </div>
      <div>
        <a href='https://postimg.cc/QFqGt3VV' target='_blank'>
          <img
            className={style.image}
            src='https://i.postimg.cc/VkxYKs89/banner-2.jpg'
            border='0'
            alt='banner-2'
          />
        </a>
        <h1 clasName={style.tituloh1}>ABOUT:</h1>
        <div className={style.texto}>
          <div>
            <h2>Historia del Artesano:</h2>
            <div className={style.parrafo}>
              <h4>
                Soy Juan Pérez, un apasionado artesano de origen mexicano. Mi
                historia en el mundo de la artesanía comenzó hace más de dos
                décadas, cuando descubrí mi amor por trabajar con las manos y
                crear piezas únicas. Mi abuelo fue mi primera inspiración; sus
                habilidades como artesano y su amor por la tradición artesanal
                me guiaron en este hermoso viaje.
              </h4>
            </div>
          </div>
          <div>
            <h2>Filosofía de Trabajo:</h2>
            <div className={style.parrafo}>
              <h4>
                En mi taller, la artesanía es más que un oficio; es una forma de
                vida. Mi filosofía se basa en el respeto por los materiales
                naturales y la atención meticulosa a los detalles. Cada pieza
                que creo es una manifestación de mi pasión por la artesanía y mi
                compromiso con la calidad. Utilizo materiales sostenibles
                siempre que sea posible y me enorgullece crear productos que
                perduren en el tiempo.
              </h4>
            </div>
            <h2>Proceso de Creación:</h2>
            <div className={style.parrafo}>
              <h4>
                Mi proceso de creación es una danza de creatividad y habilidad.
                Desde seleccionar cuidadosamente los materiales hasta dar forma
                a cada pieza a mano, cada etapa es un acto de amor por la
                artesanía. Siempre busco nuevas técnicas y enfoques para
                enriquecer mi trabajo y ofrecer a mis clientes productos únicos
                y hermosos.
              </h4>
            </div>
            <h2>Eventos y Exposiciones:</h2>
            <div className={style.parrafo}>
              <h4>
                A lo largo de mi carrera, he tenido el privilegio de exhibir mis
                creaciones en ferias de artesanía y exposiciones locales. Es un
                honor compartir mi trabajo con la comunidad y conocer a personas
                apasionadas por la artesanía como yo.
              </h4>
            </div>
            <h2>Compromiso con la Comunidad:</h2>
            <div className={style.parrafo}>
              <h4>
                No solo me dedico a mi taller; también creo vínculos con mi
                comunidad. Colaboro con organizaciones benéficas locales y
                ofrezco talleres de artesanía para niños, inspirando a las
                generaciones futuras a apreciar y preservar nuestras tradiciones
                artesanales.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Abaut;
