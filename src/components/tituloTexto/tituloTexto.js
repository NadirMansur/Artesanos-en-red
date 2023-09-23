import style from "./tituloTexto.module.css";

const TituloTexto = (props) => {
  const { titulo, texto } = props;
  return (
    <div className={style.historia}>
      <div className={style.tituloConteiner}>
        <h2 className={style.titulo}> {titulo}</h2>
      </div>
      <div className={style.parrafo}>
        <h4>{texto}</h4>
      </div>
    </div>
  );
};

export default TituloTexto;
