"use client";
import { Button, Popover } from "keep-react";
import SingIn from "../singIn/SingIn";  
import React from "react";
import button from "./singUpButton.module.css";
const SignUpButton = ({ onClick, onClickIngresar }) => {
  return (
    <div>
      <Popover>
        <Popover.Title>Log In</Popover.Title>
        <Popover.Description>
          puedes ingresar con tu usuario o crearte uno, de esta manera podras guardar tus productos preferidos
        </Popover.Description>
          <SingIn/>
        <Popover.Container>
          <button className={button["button"]} onClick={onClick}>
            crear
          </button>
        </Popover.Container>
        <Popover.Action>
          <button className={button["button"]} onClick={onClick}>
            SING
          </button>
        </Popover.Action>
      </Popover>
    </div>
  );
};

export default SignUpButton;