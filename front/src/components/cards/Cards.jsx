import CardComponent from "../card/perfilCard/CardComponent";
import cards from "./cards.module.css";
import ArtCard from "../card/perfilCard/ArtCard";
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
      <ArtCard
      intro="El siguiente componente es un ejemplo del mensaje que debe colocar el Emprendedor para invitar a su perfil"
      name="PEPE"
      rubro="Joyeria"/>
    </div>
  );
};

export default Cards;
