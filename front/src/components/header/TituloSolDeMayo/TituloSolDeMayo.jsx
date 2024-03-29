"use client";
import { Avatar, Card } from "keep-react";
import titulo from "./titulo.module.css";
import perfil from "../../../assets/Club_Sol_de_mayo.png";

const TituloSolDeMayo = () => {
  return (
    <div className={titulo["container"]}>
      <div className={titulo["photo-profile-container"]}>
        <img className={titulo["photo"]} src="https://i.ibb.co/x30JHkd/Artesanos-en-Red.png"></img>
      </div>
      <Card.Container className='mb-3 mt-10 text-center'>
        <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
          <p className={titulo["titulo"]}>Emp.Red</p>
        </Card.Title>
        <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
          Feria virtual de emprendedores
        </Card.Title>
      </Card.Container>
    </div>
  );
};

export default TituloSolDeMayo;
