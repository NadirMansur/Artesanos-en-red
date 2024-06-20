import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import deleteIcon from "../../../assets/iconos/removeIcon.png";
import ws from "../../../assets/ws/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png";
import {
  // h2Style,
  pStyle,
  photoProfile,
  photo_profile_container,
} from "../../../utils/constantes";
import Icon from "../../Icon/Icon";
import AceptCancel from "../../aceptarContuar/AceptCancel";
import Modal from "../../modal/Modal";
import prod from "./prodCard.module.css";

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
  id,
  isHomeArt,
}) => {
  const [tagsArray, setTagsArray] = useState(null);
  const enndpointDeleteProd = import.meta.env.VITE_DELETE_PROD;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  // const [openmodal, setOpenmodal] = useState(false);

  const marginLeft = isMobile ? "16.5em" : "16.5em";
  useEffect(() => {
    if (tags) {
      setTagsArray(tags);
    }
    // eslint-disable-next-line
  }, []);

  const [visibleAceptCancel, setVisibleAceptCancel] = useState(false);

  const showAceptCancel = () => {
    // setOpenmodal(true);
    setVisibleAceptCancel(!visibleAceptCancel);
  };

  const fetchDeleteProd = async (id) => {
    try {
      const response = await fetch(enndpointDeleteProd + `id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        return res;
      } else {
        console.error(
          "Error en la respuesta del servidor:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching art data:", error);
    }
  };

  return (
    <div>
      <Modal
        closePopup={() => {
          // setOpenmodal(false);
          setVisibleAceptCancel(false);
        }}
        open={visibleAceptCancel}
      >
        <AceptCancel
          onConfirm={() => {
            fetchDeleteProd(id).then(() => {
              window.location.reload();
            });
          }}
        >
          <p style={pStyle}> Seguro desea eliminar el producto {title} ? </p>
          <div style={photo_profile_container}>
            <img style={photoProfile} src={img} />
          </div>
        </AceptCancel>
      </Modal>
      <div className={prod["container"]}>
        {isHomeArt && (
          <Icon
            icon={deleteIcon}
            onClick={() => {
              showAceptCancel();
            }}
            position='absolute'
            marginLeft={marginLeft}
            marginBottom='0%'
            id={`${title}_delete`}
            width='3rem'
            height='3rem'
          ></Icon>
        )}
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
              "?text=Hola%2C%20como%20estas%3F%2C%20te%20vi%20en%20la%20pagina%20*Artesanos*%20*en*%20*Red*%2C%20y%20tengo%20interés%20en%20tu%20Producto%20" +
              "*" +
              title +
              "*" +
              "."
            }
          >
            <img
              className={prod["prod-image"]}
              alt='Chat on WhatsApp'
              src={ws}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

ProdCard.propTypes = {
  isHomeArt: PropTypes.bool,
  id: PropTypes.string,
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

ProdCard.defaultProps = {
  isHomeArt: false,
};

export default ProdCard;
