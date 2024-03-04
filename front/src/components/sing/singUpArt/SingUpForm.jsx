import UpImg from "../../upImg/UpImg";
import React, { useState } from "react";
import sing from "./singUpForm.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import SelectRubro from "../../select/Select";
import { useDispatch, useSelector, connect } from "react-redux";
import { setFormErrorsArtesano, cleanFormErrorsArtesano} from "../../../store/ducks/errorsDuck";

const SingInUp = () => {
  const dispatch = useDispatch();

  const endpoint = import.meta.env.VITE_CREATE_ART;

  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    signUpName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpPasswordRepeat: "",
    tel: "",
    intro: "",
  });

  const [statusResponse, setStatusResponse] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const errors = useSelector((state) => state.rootReducer.errors.formErrorsArt);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (
      dispatch(cleanFormErrorsArtesano({})), (isMountedRef.current = false)
    );
  }, []);

  const handleSignUpChange = (e) => {
    //console.log("handleSignUpChange");
    const { name, value } = e.target;
    let isValid = true;
    let error = "";
    // console.log(name, value);
    if (name === "signUpEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
      error = isValid ? "" : "ejemplo@ej.com tu@ejemplo.com";
    } else if (name === "tel") {
      const phoneRegex = /^223\d{7}$/;
      isValid = phoneRegex.test(value);
      error = isValid
        ? ""
        : "El numero de telefono debe comenzar con 223, ej: 2235";
    } else if (name === "intro") {
      const maxLength = 570;
      isValid = value.trim() !== "" && value.length <= maxLength;
      error = isValid
        ? ""
        : `La introducción no debe estar vacía y no debe superar los ${maxLength} caracteres.`;
    } else if (name === "signUpPasswordRepeat") {
      if (signUpData.signUpPassword !== value) {
        isValid = false;
        error = isValid ? "" : "Las contraseñas deben ser iguales";
      }
    }

    setSignUpData({ ...signUpData, [name]: value });

    dispatch(
      setFormErrorsArtesano({
        ...errors,
        [name]: error,
      })
    );
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;
    try {
      setFormSubmitted(true);
      //////////////////////logica de envio de formulario///////////////////////
      const formData = new FormData();
      formData.append("signUpName", signUpData.signUpName);
      formData.append("signUpEmail", signUpData.signUpEmail);
      formData.append("signUpPassword", signUpData.signUpPassword);
      formData.append("tel", signUpData.tel);
      formData.append("intro", signUpData.intro);
      formData.append("file", selectedFile);
      //console.log(formData);
      //console.log(signUpData);
      //console.log(selectedFile);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      //console.log("response", response);
      //console.log("responseheaders", response.headers);
      //console.log("responseheaders.Headers", response.headers.Headers);
      if (isMountedRef.current) {
        if (response.ok) {
          //falta el redireccionamiento si la respuesta fue correcta
          const { status, message, newArt } = await response.json();
          //si la creacion del usuaruio tiene status true
          console.log(status);
          console.log(newArt);
          setStatusResponse(true);
          navigate("/login", { state: { newArt: newArt } });

          console.log(message);
          console.log("Imagen enviada correctamente");
        }
      }
    } catch (error) {
      if (isMountedRef.current) {
        console.error("Error de red:", error);
      }
    }
    //////////////////////logica de envio de formulario///////////////////////
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //console.log(file);
    if (!file) {
      dispatch(
        setFormErrorsArtesano({
          ...errors,
          img: "Debes subir una imagen para continuar",
        })
      );
    } else {
      setSelectedFile(file);
      generateThumbnail(file);
      dispatch(
        setFormErrorsArtesano({
          ...errors,
          img: "",
        })
      );
    }
  };

  const generateThumbnail = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setThumbnail(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      {!statusResponse ? (
        <div className={sing["container"]}>
          <span className={sing["span"]}>
            Si no tienes usuario emprendedor puedes crearte una aquí. El usuario
            debe ser dado de alta para publicar y poder ser mostrado en la
            pagina principal.
          </span>
          <h2 className={sing["h2"]}>Crear Usuario Emprendedor</h2>
          <form onSubmit={handleSignUpSubmit} className={sing["form"]}>
            <input
              className={sing["input"]}
              type='text'
              name='signUpName'
              placeholder='Nombre de Usuario'
              value={signUpData.signUpName}
              onChange={handleSignUpChange}
              required
            />
            <SelectRubro type='text' name='rubro'></SelectRubro>
            <input
              className={sing["input"]}
              type='email'
              name='signUpEmail'
              placeholder='Email'
              defaultValue={signUpData.signUpEmail}
              onChange={handleSignUpChange}
              required
            />
            {errors.signUpEmail != "" ? (
              <span className={sing["span-alert"]}>{errors.signUpEmail}</span>
            ) : null}
            <input
              className={sing["input"]}
              type='password'
              name='signUpPassword'
              placeholder='Password'
              value={signUpData.signUpPassword}
              onChange={handleSignUpChange}
              required
            />
            <input
              className={sing["input"]}
              type='password'
              name='signUpPasswordRepeat'
              placeholder='Repeti la Password'
              value={signUpData.signUpPasswordRepeat}
              onChange={handleSignUpChange}
              required
            />
            {errors.signUpPasswordRepeat != "" ? (
              <span className={sing["span-alert"]}>
                {errors.signUpPasswordRepeat}
              </span>
            ) : null}
            <input
              className={sing["input"]}
              type='text'
              name='tel'
              placeholder='tel'
              defaultValue={signUpData.tel}
              onChange={handleSignUpChange}
              required
            />
            {errors.tel != "" ? (
              <span className={sing["span-alert"]}>{errors.tel}</span>
            ) : null}
            <input
              className={sing["input"]}
              type='text'
              name='intro'
              placeholder='Introduccion a tu perfil'
              defaultValue={signUpData.intro}
              onChange={handleSignUpChange}
              required
            />
            {errors.intro != "" ? (
              <span className={sing["span-alert"]}>{errors.intro}</span>
            ) : null}
            <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
            {errors.img != "" ? (
              <span className={sing["span-alert"]}>{errors.img}</span>
            ) : null}
            <button
              className={sing["button"]}
              type='submit'
              disabled={formSubmitted}
            >
              {!statusResponse
                ? formSubmitted
                  ? "Enviando..."
                  : "Sign Up"
                : "Usuario creado!"}
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default connect(null, { setFormErrorsArtesano })(SingInUp);
