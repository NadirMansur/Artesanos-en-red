import CardComponent from "../card/perfilCard/CardComponent";
import cards from "./cards.module.css";
const Cards = () => {
  return (
    <div className={cards["container"]}>
      <CardComponent id="1" />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default Cards;
