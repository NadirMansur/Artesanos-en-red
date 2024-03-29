import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AvatarPerfil from "./avatarPerfil/AvatarPerfil";
import card from "./artCard.module.css";
import { fetchArtData, fetchRubrosById } from "../../../store/ducks/artDuck";

const ArtCard = (props) => {
  const [art, setArt] = useState(null);
  const [rubros, setRubros] = useState(null);

  const { id } = props;

  useEffect(() => {
    fetchArtData(id).then((data) => {
      setArt(data);
    });
    fetchRubrosById(id).then((data) => {
      // mock usuarios sin rubros
      if (Array.isArray(data)) {
        setRubros(data);
      }
    }); 
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {art && rubros && (
        <div className={card["container"]}>
          <span className={card["intro"]}>{art.intro}</span>
          <div className={card["card-container"]}>
            <AvatarPerfil img={art.img_perfil} />
            <div className={card["card-container-column"]}>
              <Link to={`/detail/${id}`}>
                <p className={card["name"]}>{art.username}</p>
              </Link>
              {rubros.map((rubro, index) => {
                return <p key={index+rubro} className={card["rubro"]}> {rubro}</p>
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ArtCard.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ArtCard;
