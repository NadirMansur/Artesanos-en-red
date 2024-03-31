import { useSelector } from "react-redux";
import ArtCard from "../card/perfilCard/ArtCard";
import cards from "./cards.module.css";

const Cards = () => {
  const artesanos = useSelector((state) => state.rootReducer.arts.arts);
  console.log(artesanos);
  return (
    <>
      {artesanos ? (
        <div className={cards["container"]}>
          {artesanos.map((card, index) => {
            return <ArtCard key={index + card.id} id={card.id}></ArtCard>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Cards;
