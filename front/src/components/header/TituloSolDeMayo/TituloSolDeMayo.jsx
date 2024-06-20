"use client";
import { Card } from "keep-react";
import logo from "../../../assets/M.png";
import titulo from "./titulo.module.css";

const TituloSolDeMayo = () => {
  return (
    <div className={titulo["container"]}>
      <div className={titulo["photo-profile-container"]}>
        <img className={titulo["photo"]} src={logo}></img>
      </div>
      <Card.Container className='mb-3 mt-10 text-center'>
        <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
          <p className={titulo["titulo"]}>Merlín</p>
        </Card.Title>
        <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
          Feria virtual
        </Card.Title>
      </Card.Container>
    </div>
  );
};

export default TituloSolDeMayo;
