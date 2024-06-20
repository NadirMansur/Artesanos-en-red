import PropTypes from "prop-types";
import { useState } from "react";
import {
  //   h2Style,
  // primaryContainer,
  pStyle,
  photoProfile,
  photo_profile_container,
  secondaryContainer,
} from "../../utils/constantes";
import AceptCancel from "../aceptarContuar/AceptCancel";
import ContainerBase from "../containers/containerBase";
import Modal from "../modal/Modal";

const DeletePhoto = ({ index, item }) => {
  const [visibleAceptCancel, setVisibleAceptCancel] = useState(false);

  const showAceptCancel = () => {
    // setOpenmodal(true);
    setVisibleAceptCancel(!visibleAceptCancel);
  };

  const enndpointDeleteProd = import.meta.env.VITE_DELETE_PHOTO;

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
            fetchDeleteProd(item.id).then(() => {
              window.location.reload();
            });
          }}
        >
          <p style={pStyle}> Seguro desea eliminar la foto? </p>
          <div style={photo_profile_container}>
            <img style={photoProfile} src={item.img} />
          </div>
        </AceptCancel>
      </Modal>
      <ContainerBase
        key={`${index}_ContainerBase_${item.id}`}
        style={{ ...secondaryContainer }}
      >
        <img
          style={{
            width: "10rem",
          }}
          src={item.img}
        ></img>
        <button
          onClick={() => {
            showAceptCancel();
          }}
        >
          Eliminar
        </button>
      </ContainerBase>
    </div>
  );
};

DeletePhoto.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default DeletePhoto;
