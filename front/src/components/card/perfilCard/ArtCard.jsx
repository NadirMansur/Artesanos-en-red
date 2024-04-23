import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArtData, fetchRubrosById } from "../../../store/ducks/artDuck";
import card from "./artCard.module.css";
import AvatarPerfil from "./avatarPerfil/AvatarPerfil";

const ArtCard = (props) => {
  const [art, setArt] = useState(null);
  const [rubros, setRubros] = useState(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

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
      {art && rubros && art.status && (
        <div className={card["container"]}>
          <div className={card["card-container"]}>
            <div className={card["card-container-row"]}>
              <div className={card["img-name-container-column"]}>
                <AvatarPerfil img={art.img_perfil} />
                <Link to={`/detail/${id}`}>
                  <p className={card["name"]}>{art.username}</p>
                </Link>
              </div>
              <div className={card["rubros"]}>
                {rubros.map((rubro, index) => {
                  return (
                    <p key={index + rubro} className={card["rubro"]}>
                      {rubro}
                      {","}
                    </p>
                  );
                })}
              </div>
            </div>
            <span className={`${isMobile ? card["intro"] : card["hiden"]}`}>
              {art.intro}
            </span>
            <span className={`${isMobile ? card["hiden"] : card["intro"]}`}>
              {art.intro}
            </span>
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
