import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import prod from "./prodCard.module.css";
import ws from "../../../assets/ws/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png";

const ProdCard = ({
  tag1,
  tag2,
  tag3,
  tag4,
  title,
  name,
  rubro,
  description,
  img,
  tel,
  tags,
}) => {
  const [tagsArray, setTagsArray] = useState(null);

  useEffect(() => {
    if (tags) {
      setTagsArray(tags);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={prod["container"]}>
      <div className={prod["container-image"]}>
        <img
          className={prod["prod-image"]}
          src={
            img
              ? img
              : "https://img.freepik.com/foto-gratis/resumen-bombilla-creativa-sobre-fondo-azul-brillante-ia-generativa_188544-8090.jpg"
          }
        ></img>
      </div>
      <div className={prod["tags-name-container"]}>
        <div className={prod["tags-container"]}>
          {tagsArray ? (
            tagsArray.map((tag, index) => {
              return (
                <div key={index} className={prod["tag-container"]}>
                  <h4 className={prod["tag"]}>{tag.name}</h4>
                </div>
              );
            })
          ) : (
            <>
              <div className={prod["tag-container"]}>
                <h4 className={prod["tag"]}>{tag1 ? tag1 : "tag name"}</h4>
              </div>
              <div className={prod["tag-container"]}>
                <h4 className={prod["tag"]}>{tag2 ? tag2 : "tag name"}</h4>
              </div>
              <div className={prod["tag-container"]}>
                <h4 className={prod["tag"]}>{tag3 ? tag3 : "tag name"}</h4>
              </div>
              <div className={prod["tag-container"]}>
                <h4 className={prod["tag"]}>{tag4 ? tag4 : "tag name"}</h4>
              </div>
            </>
          )}
        </div>
        <div className={prod["nombre-rubro-container"]}>
          <h3 className={prod["nombre"]}>{name ? name : "Marca o Nombre"}</h3>
          <h4 className={prod["rubro"]}>{rubro ? rubro : "Rubro"}</h4>
        </div>
      </div>
      <div className={prod["title-description-container"]}>
        <h2 className={prod["title"]}>
          {title ? title : "Titulo del Producto"}
        </h2>
        <div className={prod["description-container"]}>
          <span className={prod["description"]}>
            {description
              ? description
              : "descripcion del producto ########## # #  ########   ######## ######## ######## ######## ########"}
          </span>
        </div>
      </div>
      <div className={prod["ws-container"]}>
        <a
          aria-label='Chat on WhatsApp'
          href={
            "https://wa.me/" +
            tel +
            "?text=Hola%2C%20como%20estas%3F%2C%20te%20vi%20en%20la%20pagina%20Sol%20de%20Mayo%2C%20y%20tengo%20interés%20en%20tus%20productos."
          }
        >
          <img className={prod["prod-image"]} alt='Chat on WhatsApp' src={ws} />
        </a>
      </div>
    </div>
  );
};

ProdCard.propTypes = {
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string,
  tag4: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rubro: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

export default ProdCard;

//   "Tags": [
//     {
//       "id": 2,
//       "name": "#sgdh1"
//     },
//     {
//       "id": 1,
//       "name": "#qwe 2"
//     },
//     {
//       "id": 3,
//       "name": "#sgdh3"
//     },
//     {
//       "id": 4,
//       "name": "#sgdh4"
//     }
//   ]
