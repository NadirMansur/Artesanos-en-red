"use client";
import { useState, useEffect } from 'react';
import { Heart } from "phosphor-react";
import { Card } from "keep-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {fetchProdsById} from "../../store/ducks/artDuck";
import art from "./art.module.css";
import perfil from "../../assets/Club_Sol_de_mayo.png";
import ProdCard from "../card/prodCard/ProdCard.jsx";
const Art = () => {

  const { id } = useParams();

    const [prods, setProds] = useState(null);
    
    useEffect(() => {
      fetchProdsById(id).then((data) =>{
        setProds(data)
      })
      // eslint-disable-next-line
    }, []);

    // Rest of the code...

  return (
    <div className={art["page"]}>
      <Card.Container className='absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200'>
        <Heart size={20} weight='bold' color='white' />
      </Card.Container>
      <div className={art["photo-port-container"]}>
        <img
          src='https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format'
          className={art["photo-port"]}
        ></img>
      </div>
      <div className={art["info"]}>
        <div className={art["photo-profile-container"]}>
          <img src={perfil}></img>
        </div>
        <div>
          <Card.Container className='mb-3 mt-10 text-center'>
            <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
              <div className={art["name"]}>Khairul Islam</div>
            </Card.Title>
            <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
              <div className={art["rubro"]}>UI/UX Designer</div>
            </Card.Title>
          </Card.Container>
        </div>
      </div>
      <div className={art["prod"]}>
        {prods && prods.map((prod, index) =>{
          return  <ProdCard
          key={index}
          title={prod.prod_name}
          name={prod.Artesano.username}
          rubro={prod.Rubro.name}
          description={prod.description}
          img={prod.img_1}
          tel={prod.Artesano.tel}
          tags={prod.Tags}
        ></ProdCard>
        })}
      </div>
      <Link to={`/`} /*className={styles.volver}*/>
        <div>VOLVER ATRAS</div>
      </Link>
    </div>
  );
};

export default Art;