// Para incluir una imagen PNG:
// <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX"><img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.png" />
// <a />

// Ejemplo: https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
import style from "./WsButton.module.css";

const WhatsAppButton = (props) => {
  const { number, mensaje, producto } = props;

  let link = "https://wa.me/" + number + "?text=" + mensaje + producto;

  return (
    <div>
      <a href={link}>
        <button className={style.button}>Comprar este producto</button>{" "}
      </a>
    </div>
  );
};

export default WhatsAppButton;
