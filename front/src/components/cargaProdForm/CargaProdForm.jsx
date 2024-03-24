import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormErrorsProducto,
  cleanFormErrorsProd,
} from "../../../store/ducks/errorsDuck";
import { validate } from "../../utils/validateProd";
import Message from "../message/Message";
import ProdCard from "../card/prodCard/ProdCard";
import SelectRubro from "../select/Select";
import styles from "./cargaProdFrom.module.css";

const CargaProdForm = (props) => {
  const endpoint = import.meta.env.VITE_CREATE_PROD;
  
  const errors = useSelector((state) => state.rootReducer.errors.formErrorsProd);
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(e, dispatch, errors);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      dispatch(
        cleanFormErrorsProd({
          ...errors,
          img: "Debes subir una imagen para continuar",
        })
      );
    } else {
      setSelectedFile(file);
      generateThumbnail(file);
      dispatch(
        cleanFormErrorsProd({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const formData = new FormData();
      formData.append("prod_name", formData.title);
      formData.append("description", formData.description);
      formData.append("signUpPassword", formData.tag1);
      formData.append("tel", formData.tag2);
      formData.append("intro", formData.tag3);
      formData.append("intro", formData.tag4);
      formData.append("rubro", rubro);
      formData.append("file", selectedFile);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (isMountedRef.current) {
        if (response.ok) {
          const { status, message } = await response.json();
          if (status) {
            <Message message={message} />;
          }
          setStatusResponse(status);
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
    <div className={styles["form-container"]}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <label htmlFor='title' className={styles["label"]}>
          Título del Producto
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className={styles["input"]}
          />
          {errors.title != "" ? (
            <span className={styles["span-alert"]}>{errors.title}</span>
          ) : null}
        </label>
        <label htmlFor='combo' className={styles["label"]}>
          Rubro
          <SelectRubro />
        </label>
        <label htmlFor='description' className={styles["label"]}>
          Descripción del Producto
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className={styles["textarea"]}
          />
          {errors.description != "" ? (
            <span className={styles["span-alert"]}>{errors.description}</span>
          ) : null}
        </label>
        <label htmlFor='tag1' className={styles["label"]}>
          Tag 1
          <input
            type='text'
            id='tag1'
            name='tag1'
            value={formData.tag1}
            onChange={handleChange}
            className={styles["input"]}
          />
          {errors.tag1 != "" ? (
            <span className={styles["span-alert"]}>{errors.tag1}</span>
          ) : null}
        </label>
        <label htmlFor='tag2' className={styles["label"]}>
          Tag 2
          <input
            type='text'
            id='tag2'
            name='tag2'
            value={formData.tag2}
            onChange={handleChange}
            className={styles["input"]}
          />
          {errors.tag2 != "" ? (
            <span className={styles["span-alert"]}>{errors.tag2}</span>
          ) : null}
        </label>
        <label htmlFor='tag3' className={styles["label"]}>
          Tag 3
          <input
            type='text'
            id='tag3'
            name='tag3'
            value={formData.tag3}
            onChange={handleChange}
            className={styles["input"]}
          />
          {errors.tag3 != "" ? (
            <span className={styles["span-alert"]}>{errors.tag3}</span>
          ) : null}
        </label>
        <label htmlFor='tag4' className={styles["label"]}>
          Tag 4
          <input
            type='text'
            id='tag4'
            name='tag4'
            value={formData.tag4}
            onChange={handleChange}
            className={styles["input"]}
          />
          {errors.tag4 != "" ? (
            <span className={styles["span-alert"]}>{errors.tag4}</span>
          ) : null}
        </label>
        <label htmlFor='image' className={styles["label"]}>
          Imagen
          <input
            type='file'
            id='img'
            name='img'
            onChange={handleImageChange}
            className={styles["input"]}
          />
          {errors.img != "" ? (
            <span className={styles["span-alert"]}>La imagen es requerida</span>
          ) : null}
        </label>
        <button type='submit' className={styles["button"]}>
          {!statusResponse
            ? formSubmitted
              ? "Enviando..."
              : "Crear Producto"
            : "Producto creado!"}
        </button>
      </form>
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
    </div>
  );
};

CargaProdForm.propTypes = {
  username: PropTypes.string.isRequired,
  rubro: PropTypes.string.isRequired,
};

export default CargaProdForm;
