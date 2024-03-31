"use client";
import { Popover } from "keep-react";
import React from "react";
import { Link } from "react-router-dom";
import GoogleButtonComponent from "./button/GoogleButtonComponent";
import button from "./singUpButton.module.css";

const SignUpButton = ({ onClick, onClickIngresar }) => {
  return (
    <div>
      <Popover>
        <Popover.Title>Login</Popover.Title>
        <Popover.Description>
          puedes ingresar con tu usuario como emprendedor o crearte uno, de esta
          manera podras guardar tus productos preferidos
        </Popover.Description>
        <Popover.Container>
          <Link to='/login'>
            <button className={button["button"]}>
              Cómo Emprendedor
            </button>
          </Link>
          <GoogleButtonComponent />
        </Popover.Container>
        <Popover.Action>
          <button className={button["button"]} onClick={onClick}>
            Ingresar
          </button>
        </Popover.Action>
      </Popover>
    </div>
  );
};

export default SignUpButton;
