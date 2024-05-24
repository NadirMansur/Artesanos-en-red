import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HOCNameEditForm from "../../HOC/NameEditForm";
import ProdCard from "../../card/prodCard/ProdCard";
import ProfileCard from "../../card/profileCard/ProfileCard";
import CargaProdForm from "../../cargaProdForm/CargaProdForm";
import ArtGalery from "../../galeria/ArtGalery";
import CargaFotoGaleria from "../../galeria/CargaFotoGaleria";
import Menu from "../../menu/Menu";
import emp from "./homeArt.module.css";

const HomeArt = (props) => {
  const location = useLocation();
  const [art, setArt] = useState(null);
  const [visibleCreateProd, setVisibleCreateProd] = useState(false);
  const [visibleGaleria, setVisibleGaleria] = useState(false);
  const [visibleCreateGaleria, setVisibleCreateGaleria] = useState(false);
  const [prods, setProds] = useState(null);
  const [galeria, setGaleria] = useState([]);

  const endpointProds = import.meta.env.VITE_GET_PRODS_BY_ID;
  const enndpointGaleria = import.meta.env.VITE_GET_GALERY_BY_ID;

  const fetchProdData = async (id) => {
    try {
      const response = await fetch(endpointProds + `id=${id}`);
      if (response.ok) {
        const prodsData = await response.json();
        return prodsData;
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

  const showCreateProd = () => {
    setVisibleCreateProd(!visibleCreateProd);
  };

  const showGaleria = () => {
    setVisibleGaleria(!visibleGaleria);
  };

  const showCreateGaleria = () => {
    setVisibleCreateGaleria(!visibleCreateGaleria);
  };

  const createGalery = (array) => {
    const rows = Math.ceil(array.length / 3);
    const gallery = [];
    for (let i = 0; i < rows; i++) {
      const row = array.slice(i * 3, i * 3 + 3).map((obj) => obj.img);
      gallery.push(row);
    }
    return gallery;
  };

  useEffect(() => {
    if (location.state) {
      setArt(location.state.art);
    } else if (props.name) {
      setArt(props);
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (art?.id) {
      const id = art.id;
      fetchProdData(id).then((data) => {
        setProds(data);
      });
      fetchGaleryData(id).then((data) => {
        //despues revisar
        const galery = createGalery(data);
        setGaleria(galery);
        //despues revisar
      });
    }
    // eslint-disable-next-line
  }, [art]);

  return (
    <div className={emp["homeArt"]}>
      {art ? (
        <div>
          <Menu link={["/"]} text={["Home"]} />
          <HOCNameEditForm />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <button onClick={showCreateProd}>
              {!visibleCreateProd ? "Crear Producto" : "Cerrar Crear Producto"}
            </button>
            <button onClick={showGaleria}>
              {!visibleGaleria ? "Mostrar Galeria" : "Ocultar Galeria"}
            </button>
            <button onClick={showCreateGaleria}>
              {!visibleCreateGaleria ? "Subir Foto" : "Ocultar subir Foto"}
            </button>
          </div>

          {visibleCreateGaleria && (
            <div className={emp["div-CargaProdForm"]}>
              <h1
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  fontSize: "3rem",
                }}
              >
                Subir foto a Galeria
              </h1>
              <CargaFotoGaleria galeria={galeria} />
            </div>
          )}

          {visibleCreateProd && (
            <div className={emp["div-CargaProdForm"]}>
              <h2
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  fontSize: "3rem",
                }}
              >
                Cargar Producto
              </h2>
              <CargaProdForm username={art.username}></CargaProdForm>
            </div>
          )}

          <ProfileCard art={art} />
        </div>
      ) : null}
      {visibleGaleria && (
        <div>
          <h1
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Tú Galeria
          </h1>
          <ArtGalery galeria={galeria} />
        </div>
      )}
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        Tus Productos
      </h1>
      <div className={emp["prod"]}>
        {prods &&
          prods.map((prod, index) => {
            return (
              <ProdCard
                key={index}
                title={prod.prod_name}
                name={prod.Artesano.username}
                rubro={prod.Rubro.name}
                description={prod.description}
                img={prod.img_1}
                tel={prod.Artesano.tel}
                tags={prod.Tags}
              ></ProdCard>
            );
          })}
      </div>
    </div>
  );
};

export default HomeArt;

HomeArt.propTypes = {
  name: PropTypes.string,
};
