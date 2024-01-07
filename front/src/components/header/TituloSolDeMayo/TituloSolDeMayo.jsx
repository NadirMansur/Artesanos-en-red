"use client";
import { Avatar, Card } from "keep-react";
import titulo from "./titulo.module.css";
import perfil from "../../../assets/Club_Sol_de_mayo.png";

const TituloSolDeMayo = () => {
  return (
    <div className={titulo["container"]}>
      <div className={titulo["photo-profile-container"]}>
        <img src={perfil}></img>
      </div>
      <Card.Container className='mb-3 mt-10 text-center'>
        <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
          <p className={titulo["titulo"]}>Sol de Mayo</p>
        </Card.Title>
        <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
          Feria Emprendedora
        </Card.Title>
      </Card.Container>
    </div>
  );
};

export default TituloSolDeMayo;
