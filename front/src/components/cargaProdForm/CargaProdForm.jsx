import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";

import {
  cleanFormErrorsProd,
  setFormErrorsProducto,
} from "../../store/ducks/errorsDuck";
import {
  errorStyle,
  inputStyle,
  labelStyle,
  primaryContainer,
  secondaryContainer,
} from "../../utils/constantes";
import { validate } from "../../utils/validateProd";
import InputText from "../Input.jsx/InputText";
import ProdCard from "../card/prodCard/ProdCard";
import ContainerBase from "../containers/containerBase";
import SelectRubro from "../select/Select";
import UpImg from "../upImg/UpImg";
import styles from "./cargaProdFrom.module.css";

const CargaProdForm = (props) => {
  const isMobile = useIsMobile();
  const endpoint = import.meta.env.VITE_CREATE_PROD;
  const art = useSelector((state) => state.rootReducer.art.artLoginData);

  const errors = useSelector(
    (state) => state.rootReducer.errors.formErrorsProd
  );
  const rubro = useSelector((state) => state.rootReducer.rubro.rubro);
  const dispatch = useDispatch();

  const { username } = props;

  const initialFormData = {
    title: "",
    description: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [statusResponse, setStatusResponse] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  // const [messageResponse, setMessageResponse] = useState(null);

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (
      dispatch(cleanFormErrorsProd({})), (isMountedRef.current = false)
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (statusResponse) {
      setFormData(initialFormData);
      setSelectedFile(null);
      setThumbnail(null);
      setFormSubmitted(false);
    }
    // eslint-disable-next-line
  }, [statusResponse]);

  const handleChange = (e) => {
    setStatusResponse(false);
    setFormSubmitted(false);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(e, dispatch, errors);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      dispatch(
        setFormErrorsProducto({
          ...errors,
          img: "Debes subir una imagen para continuar",
        })
      );
    } else {
      setSelectedFile(file);
      generateThumbnail(file);
      dispatch(
        setFormErrorsProducto({
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

  const resetButton = () => {
    setFormSubmitted(false);
    setStatusResponse(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rubro === null) {
      dispatch(
        setFormErrorsProducto({
          ...errors,
          rubro: "Debes seleccionar un rubro para continuar",
        })
      );
    } else {
      dispatch(
        setFormErrorsProducto({
          ...errors,
          rubro: "",
        })
      );
    }
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      console.log("Form has errors. Please fix them before submitting.");
      return;
    }
    if (!selectedFile) {
      dispatch(
        setFormErrorsProducto({
          ...errors,
          img: "Debes subir una imagen para continuar",
        })
      );
      return;
    }
    try {
      setFormSubmitted(true);
      //////////////////////logica de envio de formulario///////////////////////
      //revisar persistencia de datos al recargar la pagina, como id de usuario
      //revisar persistencia de datos al recargar la pagina, como id de usuario
      //revisar persistencia de datos al recargar la pagina, como id de usuario
      //revisar persistencia de datos al recargar la pagina, como id de usuario
      //revisar persistencia de datos al recargar la pagina, como id de usuario
      const formDataBody = new FormData();
      formDataBody.append("title", formData.title);
      formDataBody.append("description", formData.description);
      formDataBody.append("tag1", formData.tag1);
      formDataBody.append("tag2", formData.tag2);
      formDataBody.append("tag3", formData.tag3);
      formDataBody.append("tag4", formData.tag4);
      formDataBody.append("rubro", rubro);
      formDataBody.append("id", art.id);
      formDataBody.append("file", selectedFile);

      // for (var pair of formDataBody.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      const response = await fetch(endpoint, {
        method: "POST",
        body: formDataBody,
      });

      if (isMountedRef.current) {
        if (response.ok) {
          const { status /* message */ } = await response.json();
          if (status) {
            setStatusResponse(status);
            //  setMessageResponse(message);
          }
        }
      }
    } catch (error) {
      if (isMountedRef.current) {
        console.error("Error de red:", error);
      }
    }
    //////////////////////logica de envio de formulario///////////////////////
  };

  return (
    <ContainerBase
      style={
        isMobile
          ? {
              ...primaryContainer,
              flexDirection: "column",
              justifyContent: "center",
              alingItems: "center",
              width: "20em",
            }
          : {
              ...primaryContainer,
              flexDirection: "row",
              justifyContent: "center",
              alingItems: "center",
            }
      }
    >
      <ContainerBase
        style={
          isMobile
            ? {
                ...secondaryContainer,
                flexDirection: "column",
                justifyContent: "center",
                border: "none",
              }
            : {
                ...secondaryContainer,
                flexDirection: "column",
                justifyContent: "center",
              }
        }
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor='combo' className={styles["label"]}>
            <p>Rubro</p>
            <SelectRubro />
            {errors.rubro != "" ? (
              <span className={styles["span-alert"]}>{errors.rubro}</span>
            ) : null}
          </label>
          <InputText
            p='Título del Producto'
            htmlFor='title'
            value={formData.title}
            onChange={handleChange}
            error={errors.title}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <InputText
            p='Descripción del Producto'
            htmlFor='description'
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <InputText
            p='Tag 1'
            htmlFor='tag1'
            value={formData.tag1}
            onChange={handleChange}
            error={errors.tag1}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <InputText
            p='Tag 2'
            htmlFor='tag2'
            value={formData.tag2}
            onChange={handleChange}
            error={errors.tag2}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <InputText
            p='Tag 3'
            htmlFor='tag3'
            value={formData.tag3}
            onChange={handleChange}
            error={errors.tag3}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <InputText
            p='Tag 4'
            htmlFor='tag4'
            value={formData.tag4}
            onChange={handleChange}
            error={errors.tag4}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
          <label>
            <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
            {errors.img != "" ? (
              <span className={styles["span-alert"]}>{errors.img}</span>
            ) : null}
          </label>
        </form>
      </ContainerBase>
      <ContainerBase
        style={
          isMobile
            ? {
                ...secondaryContainer,
                justifyContent: "flex-start",
                border: "none",
              }
            : { ...secondaryContainer, justifyContent: "flex-start" }
        }
      >
        <ProdCard
          tag1={formData.tag1}
          tag2={formData.tag2}
          tag3={formData.tag3}
          tag4={formData.tag4}
          title={formData.title}
          name={username}
          rubro={rubro}
          description={formData.description}
          img={thumbnail}
        ></ProdCard>
        <button
          type='submit'
          className={styles["button"]}
          disabled={formSubmitted}
          onClick={handleSubmit}
        >
          {!statusResponse
            ? formSubmitted
              ? "Enviando..."
              : "Crear Producto"
            : "Producto creado!"}
        </button>
        {statusResponse && (
          <button
            type='submit'
            className={styles["button"]}
            disabled={formSubmitted}
            onClick={resetButton}
          >
            Subir otro
          </button>
        )}
      </ContainerBase>
    </ContainerBase>
  );
};

CargaProdForm.propTypes = {
  username: PropTypes.string.isRequired,
};

export default CargaProdForm;
