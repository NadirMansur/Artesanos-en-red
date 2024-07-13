import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setArtLogin } from "../../../store/ducks/artDuck";
import { h2Style, secondaryColor, secondaryContainer } from "../../../utils/constantes";
import HOCNameEditForm from "../../HOC/NameEditForm";
import ProdCard from "../../card/prodCard/ProdCard";
import ProfileCard from "../../card/profileCard/ProfileCard";
import CargaProdForm from "../../cargaProdForm/CargaProdForm";
import CargaFotoGaleria from "../../galeria/CargaFotoGaleria";
import Menu from "../../menu/Menu";
import Modal from "../../modal/Modal";
import emp from "./homeArt.module.css";

const HomeArt = () => {
  const dispatch = useDispatch();
  const [art, setArt] = useState(null);
  const [visibleCreateProd, setVisibleCreateProd] = useState(false);
  const [visibleCreateGaleria, setVisibleCreateGaleria] = useState(false);
  const [prods, setProds] = useState(null);
  const [openmodal, setOpenmodal] = useState(false);
  const [showNameEditModal, setShowNameEditModal] = useState(false);
  const [galeria, setGaleria] = useState([]);
  const [showNameMessageLoginModal, setShowNameMessageLoginModal] =
    useState(false);
  const artInfo = useSelector((state) => state.rootReducer.art.artLoginData);

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
    setOpenmodal(true);
    setVisibleCreateProd(!visibleCreateProd);
  };

  // const showGaleria = () => {
  //   setOpenmodal(true);
  //   setVisibleGaleria(!visibleGaleria);
  // };

  const showCreateGaleria = () => {
    setOpenmodal(true);
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

  const getArtLoginFromCookies = () => {
    const artLogin = Cookies.get("artLogin");
    return artLogin ? JSON.parse(artLogin) : null;
  };

  useEffect(() => {
    const artLogin = getArtLoginFromCookies();

    if (artInfo) {
      console.log("aca", artInfo);
      setArt(artInfo);
      const artInfoCoockies = JSON.stringify(artInfo);
      Cookies.set("artLogin", artInfoCoockies);
    } else if (artLogin) {
      setArt(artLogin);
      dispatch(setArtLogin(artLogin));
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
        <div style={{ display: "contents", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Menu
              link={[
                "/",
                `/detail/galeria/${art.id}`,
                `/detail/galeria/edit/${art.id}`,
              ]}
              text={["Home", "Galería", "Editar Galería"]}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                opacity: openmodal && "0.5",
              }}
            >
              <button onClick={showCreateProd}>{"Crear Producto"}</button>
              <button onClick={showCreateGaleria}>{"Subir Foto"}</button>
            </div>
          </div>
          <div
            style={{
              opacity: openmodal && "0.5",
            }}
          >
            <ProfileCard
              handleEditMarca={() => {
                setOpenmodal(true);
                setShowNameEditModal(true);
              }}
              art={art}
            />
          </div>

          <Modal
            closePopup={() => {
              setOpenmodal(false);
              setShowNameEditModal(false);
              setShowNameMessageLoginModal(true);
            }}
            open={showNameEditModal}
            scroll={true}
          >
            <h2 style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}>
              Editar Información
            </h2>
            <HOCNameEditForm />
          </Modal>

          <Modal
            closePopup={() => {
              setOpenmodal(false);
              setShowNameMessageLoginModal(false);
            }}
            open={showNameMessageLoginModal}
          >
            <h2 style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}>
              Para ver la tú info cambiada debes iniciar sesión nuevamente
            </h2>
            <Link to='/login'>
              <div style={secondaryContainer}>
                <p>Inicar sesión</p>
              </div>
            </Link>
          </Modal>

          <Modal
            closePopup={() => {
              setOpenmodal(false);
              setVisibleCreateGaleria(false);
            }}
            open={visibleCreateGaleria}
          >
            <h2 style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}>
              Subir foto a Galeria
            </h2>
            <CargaFotoGaleria galeria={galeria} />
          </Modal>

          <Modal
            closePopup={() => {
              setOpenmodal(false);
              setVisibleCreateProd(false);
              window.location.reload();
            }}
            open={visibleCreateProd}
          >
            <div className={emp["div-CargaProdForm"]}>
              <h2
                style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}
              >
                Cargar Producto
              </h2>
              <CargaProdForm username={art.username}></CargaProdForm>
            </div>
          </Modal>
        </div>
      ) : null}

      <h1 style={{ ...h2Style, fontSize: "3rem", color: secondaryColor }}>
        Tus Productos
      </h1>
      <div
        style={{
          opacity: openmodal && "0.5",
        }}
        className={emp["prod"]}
      >
        {prods &&
          prods.map((prod, index) => {
            return (
              <ProdCard
                id={prod.id}
                key={index}
                title={prod.prod_name}
                name={prod.Artesano.username}
                rubro={prod.Rubro.name}
                description={prod.description}
                img={prod.img_1}
                tel={prod.Artesano.tel}
                tags={prod.Tags}
                isHomeArt
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
