"use client";
import { Card } from "keep-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchArtData,
  fetchProdsById,
  fetchRubrosById,
} from "../../store/ducks/artDuck";
import ProdCard from "../card/prodCard/ProdCard.jsx";
import artDetail from "./art.module.css";
const Art = () => {
  const { id } = useParams();

  const [prods, setProds] = useState(null);
  const [art, setArt] = useState(null);
  const [rubros, setRubros] = useState(null);

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
    fetchProdsById(id).then((data) => {
      setProds(data);
    });
    // eslint-disable-next-line
  }, []);

  // Rest of the code...

  return (
    <>
      {art && rubros && (
        <div className={artDetail["page"]}>
          {/* <Card.Container className='absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200'>
          <Heart size={20} weight='bold' color='white' />
        </Card.Container> */}
          <div className={artDetail["photo-port-container"]}>
            <img
              src='https://static.vecteezy.com/system/resources/previews/026/787/140/original/abstract-background-with-organic-shapes-and-lines-in-fall-colors-minimalist-contemporary-art-in-boho-style-aesthetic-horizontal-backdrop-modern-design-for-banner-flyer-cover-web-vector.jpg'
              className={artDetail["photo-port"]}
            ></img>
          </div>
          <div className={artDetail["info"]}>
            <div className={artDetail["photo-profile-container"]}>
              <img className={artDetail["photo"]} src={art.img_perfil}></img>
            </div>
            <div>
              <Card.Container className='mb-3 mt-10 text-center'>
                <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
                  <div className={artDetail["name"]}>{art.username}</div>
                </Card.Title>
                <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
                  <div className={artDetail["rubros"]}>
                    {rubros.map((rubro, index) => {
                      return (
                        <p key={index + rubro} className={artDetail["rubro"]}>
                          {rubro}
                          {","}
                        </p>
                      );
                    })}
                  </div>
                </Card.Title>
              </Card.Container>
            </div>
          </div>
          <div className={artDetail["prod"]}>
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
          <Link to={`/`} /*className={styles.volver}*/>
            <div>VOLVER ATRAS</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Art;
