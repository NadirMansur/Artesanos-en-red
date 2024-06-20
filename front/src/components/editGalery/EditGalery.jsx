import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  //   h2Style,
  //   pStyle,
  primaryContainer,
} from "../../utils/constantes";
import ContainerBase from "../containers/containerBase";
import DeletePhoto from "./DeletePhoto";

const EditGalery = () => {
  const [galeria, setGaleria] = useState([]);
  const { id } = useParams();
  const enndpointGaleria = import.meta.env.VITE_GET_GALERY_BY_ID;

  const fetchGaleryData = async (id) => {
    try {
      const response = await fetch(enndpointGaleria + `id=${id}`);
      if (response.ok) {
        const galeria = await response.json();
        return galeria;
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

  useEffect(() => {
    if (id) {
      fetchGaleryData(id)
        .then((data) => {
          setGaleria(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ContainerBase
        style={{
          ...primaryContainer,
          flexDirection: "column",
          width: "96rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {galeria &&
            galeria.map((item, index) => {
              return (
                <DeletePhoto
                  key={`item_galeria_${index}_${item.id}`}
                  index={index}
                  item={item}
                ></DeletePhoto>
              );
            })}
        </div>
        <Link to={`/homeart`}>
          <div>VOLVER ATRAS</div>
        </Link>
      </ContainerBase>
    </div>
  );
};

export default EditGalery;

EditGalery.propTypes = {
  fetchGaleryData: PropTypes.func,
  id: PropTypes.string,
};
