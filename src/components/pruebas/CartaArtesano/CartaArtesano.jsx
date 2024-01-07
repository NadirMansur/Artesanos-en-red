import style from "./CartaArtesano.module.css";

const CartaArtesano = (props) => {
  return (
    <div className={style.container}>
      <img src={props.src} alt={props.alt}></img>
      <p className={style.tag}>{props.tag}</p>
      <h1 className={style.title}>{props.title}</h1>
      <p className={style.mid}>{props.leyenda}</p>
      <hr></hr>
      <p className={style.small}>{props.name} </p>
    </div>
  );
};

export default CartaArtesano;
