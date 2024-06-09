import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  h2Style,
  secondaryColor,
  secondaryContainer,
} from "../../utils/constantes";
import ContainerBase from "../containers/containerBase";
import ArtGalery from "../galeria/ArtGalery";

const ArtesanoGalery = () => {
  const [galeria, setGaleria] = useState([]);
  const { id } = useParams();

  const enndpointGaleria = import.meta.env.VITE_GET_GALERY_BY_ID;

  const fetchGaleryData = async (id) => {
    try {
      const response = await fetch(enndpointGaleria + `id=${id}`);
      if (response.ok) {
        const galeria = await response.json();
       // console.log("la respuestas del fetch es:", galeria);
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

  const createGalery = (array) => {
    const rows = Math.ceil(array.length / 3);
    const gallery = [];
    for (let i = 0; i < rows; i++) {
      const row = array.slice(i * 3, i * 3 + 3).map((obj) => obj.img);
      gallery.push(row);
    }
    // console.log("la respuesta de la galerai es, ", gallery);
    return gallery;
  };

  useEffect(() => {
    if (id) {
    //  console.log("el id ", id);
      fetchGaleryData(id).then((data) => {
        const galery = createGalery(data);
        setGaleria(galery);
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2 style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}>
        Galeria
      </h2>
      {galeria.length > 0 && (
        <ContainerBase style={secondaryContainer}>
          <ArtGalery galeria={galeria} />
        </ContainerBase>
      )}
      <Link to={`/homeart`}>
        <div>VOLVER ATRAS</div>
      </Link>
    </div>
  );
};

export default ArtesanoGalery;
