import UpImg from "../../upImg/UpImg";
import { useState } from "react";
import sing from "./singUpForm.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Message from "../../message/Message";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  setFormErrorsArtesano,
  cleanFormErrorsArtesano,
} from "../../../store/ducks/errorsDuck";
import { validate } from "../../../utils/validations";

const SingInUp = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.rootReducer.errors.formErrorsArt);

  const endpoint = import.meta.env.VITE_CREATE_ART;

  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    tel: "",
    intro: "",
  });

  const [statusResponse, setStatusResponse] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [messageResponse, setMessageResponse] = useState(null);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (
      dispatch(cleanFormErrorsArtesano({})), (isMountedRef.current = false)
    );
    // eslint-disable-next-line
  }, []);

  const handleSignUpChange = (e) => {
    setStatusResponse(false);
    setFormSubmitted(false);
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
    validate(e, signUpData.password, dispatch, errors);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) return;
    if (!selectedFile) {
      dispatch(
        setFormErrorsArtesano({
          ...errors,
          img: "Debes subir una imagen para continuar",
        })
      );
      return;
    }
    try {
      setFormSubmitted(true);
      //////////////////////logica de envio de formulario///////////////////////
      const formData = new FormData();
      formData.append("signUpName", signUpData.name);
      formData.append("signUpEmail", signUpData.email);
      formData.append("signUpPassword", signUpData.password);
      formData.append("tel", signUpData.tel);
      formData.append("intro", signUpData.intro);
      formData.append("file", selectedFile);
      //console.log(formData);
      //console.log(signUpData);
      //console.log(selectedFile);

      if (isMountedRef.current) {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });

        if (response.status === 409) {
          // Manejar el error cuando el nombre de usuario ya existe
          const errorMessage = await response.text();
          setMessageResponse(errorMessage)
          setStatusResponse(false);
         return console.error(errorMessage);
        }

        if (response.ok) {
          const { status, message, newArt } = await response.json();
          // checkear correcta
          if (status) {
           setStatusResponse(status)
           setMessageResponse(message)
          }
          navigate("/login", { state: { newArt: newArt } });
        }
      }
    } catch (error) {
      if (isMountedRef.current) {
        // componente de manejo de error
        setStatusResponse(false);
        console.error("Error de red:", error);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
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
      <div className={sing["container"]}>
        <span className={sing["span"]}>
          Si no tienes usuario emprendedor puedes crearte una aquí. El usuario
          debe ser dado de alta para publicar y poder ser mostrado en la pagina
          principal.
        </span>
        <h2 className={sing["h2"]}>Crear Usuario Emprendedor</h2>
        <form onSubmit={handleSignUpSubmit} className={sing["form"]}>
          <input
            className={sing["input"]}
            type='text'
            name='name'
            placeholder='Nombre de Usuario'
            value={signUpData.name}
            onChange={handleSignUpChange}
            required
          />
          <input
            className={sing["input"]}
            type='email'
            name='email'
            placeholder='Email'
            defaultValue={signUpData.email}
            onChange={handleSignUpChange}
            required
          />
          {errors.email != "" ? (
            <span className={sing["span-alert"]}>{errors.email}</span>
          ) : null}
          <input
            className={sing["input"]}
            type='password'
            name='password'
            placeholder='Password'
            value={signUpData.password}
            onChange={handleSignUpChange}
            required
          />
          <input
            className={sing["input"]}
            type='password'
            name='passwordRepeat'
            placeholder='Repeti la Password'
            value={signUpData.passwordRepeat}
            onChange={handleSignUpChange}
            required
          />
          {errors.passwordRepeat != "" ? (
            <span className={sing["span-alert"]}>{errors.passwordRepeat}</span>
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

      {!statusResponse && formSubmitted && <Message message={messageResponse} />}
    </>
  );
};
export default connect(null, { setFormErrorsArtesano })(SingInUp);
