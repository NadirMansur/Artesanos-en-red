import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import editIcon from "../../../assets/iconos/editar.png";
import Icon from "../../Icon/Icon";
import ProdCard from "../../card/prodCard/ProdCard";
import CargaProdForm from "../../cargaProdForm/CargaProdForm";
import Menu from "../../menu/Menu";
import emp from "./homeArt.module.css";

const HomeArt = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const [art, setArt] = useState(null);
  const [visibleCreateProd, setVisibleCreateProd] = useState(false);
  const endpointProds = import.meta.env.VITE_GET_PRODS_BY_ID;
  const [prods, setProds] = useState(null);

  const fetchProdData = async (id) => {
    try {
      console.log(id);
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

  const showCreateProd = () => {
    setVisibleCreateProd(!visibleCreateProd);
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
    }
    // eslint-disable-next-line
  }, [art]);

  const handleEdit = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSumbitModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={emp["homeArt"]}>
      {art ? (
        <div>
          <Menu link={["/"]} text={["Home"]} />
          <button onClick={showCreateProd}>
            {!visibleCreateProd ? "Crear Producto" : "Mi pagina"}
          </button>
          {visibleCreateProd ? (
            <div className={emp["div-CargaProdForm"]}>
              <CargaProdForm username={art.username}></CargaProdForm>
            </div>
          ) : (
            <div className={emp["profile-card"]}>
              <div className={emp["basic-card"]}>
                <div className={emp["photo-profile-container"]}>
                  <img
                    src={art.img_perfil}
                    className={emp["photo-profile"]}
                  ></img>
                </div>
                <div className={emp["basic-info"]}>
                  <h2 className={emp["name"]}>{art.username}</h2>
                  <p className={emp["rubro"]}>{art.rubro}</p>
                  <p className={emp["tel"]}>{art.tel}</p>
                  <p className={emp["email"]}>{art.email}</p>
                </div>
              </div>
              <div className={emp["intro-container"]}>
                <p className={emp["intro"]}>{art.intro}</p>
              </div>
              <Icon icon={editIcon} onClick={handleEdit}></Icon>
            </div>
          )}
        </div>
      ) : null}
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
      {/* {isModalOpen ? (
        <EditModal
          handleCloseModal={handleCloseModal}
          handleSumbitModal={handleSumbitModal}
        />
      ) : null} */}
    </div>
  );
};

export default HomeArt;

HomeArt.propTypes = {
  name: PropTypes.string,
};
