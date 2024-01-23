import { Link } from "react-router-dom";
import AvatarPerfil from "./avatarPerfil/AvatarPerfil";
import card from "./artCard.module.css";

const ArtCard = (props) => {
  const { intro, name, rubro } = props;
  return (
    <div className={card["container"]}>
      <span className={card["intro"]}>{intro}</span>
      <div className={card["card-container"]}>
        <AvatarPerfil img='https://randomuser.me/api/portraits/men/11.jpg' />
        <div className={card["card-container-column"]}>
          <Link to={`/detail/${props.id}`}>
            <p className={card["name"]}>{name}</p>
          </Link>
          <p className={card["rubro"]}> {rubro}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
