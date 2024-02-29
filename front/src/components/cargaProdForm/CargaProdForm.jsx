import React, { useState } from "react";
import { useRef, useEffect } from "react";
import ProdCard from "../card/prodCard/ProdCard";
import styles from "./cargaProdFrom.module.css";

const CargaProdForm = (props) => {
  const endpoint = import.meta.env.VITE_CREATE_PROD;
   const { username, rubro } = props;
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
  const [statusRespose, setStatusRespose] = useState(null);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    tag1: "",
    tag2: "",
    tag3: "",
    tag4: "",
    img: "Debes subir una imagen para continuar",
  });

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    if (statusResponse) {
      setFormData(initialFormData);
      setSelectedFile(null);
      setThumbnail(null);
      setFormSubmitted(false);
    }
  }, [statusResponse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;
    let error = "";
    //console.log(name, value);
    if (name === "title") {
      const maxLength = 17;
      isValid = value.trim() !== "" && value.length <= maxLength;
      error = isValid
        ? ""
        : `"El Título del Producto debe tener un maximo de ${maxLength} caractéres.`;
    } else if (
      name === "tag1" ||
      name === "tag2" ||
      name === "tag3" ||
      name === "tag4"
    ) {
      const tag = /^#.{0,9}$/;
      isValid = tag.test(value);
      error = isValid
        ? ""
        : "El Tag debe comenzar con '#' y ser una palabra clave del producto de max 9 caractéres";
    } else if (name === "description") {
      const maxLength = 96;
      isValid = value.trim() !== "" && value.length <= maxLength;
      error = isValid
        ? ""
        : `"La descripción del Producto debe tener un maximo de ${maxLength} caractéres.`;
    }

    setErrors({
      ...errors,
      [name]: error,
    });

    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    //console.log(file);
    if (!file) {
      setErrors({
        ...errors,
        img: "Debes subir una imagen para continuar",
      });
    } else {
      setSelectedFile(file);
      generateThumbnail(file);
      setErrors({
        ...errors,
        img: "",
      });
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
    try {
      setFormSubmitted(true);
      //////////////////////logica de envio de formulario///////////////////////
      const formData = new FormData();
      formData.append("prod_name", signUpData.title);
      formData.append("description", signUpData.description);
      formData.append("signUpPassword", signUpData.tag1);
      formData.append("tel", signUpData.tag2);
      formData.append("intro", signUpData.tag3);
      formData.append("intro", signUpData.tag4);
      formData.append("file", selectedFile);
      //console.log(formData);
      //console.log(signUpData);
      //console.log(selectedFile);

      //   const response = await fetch(endpoint, {
      //     method: "POST",
      //     body: formData,
      //   });

      //console.log("response", response);
      //console.log("responseheaders", response.headers);
      //console.log("responseheaders.Headers", response.headers.Headers);
      if (isMountedRef.current) {
        if (response.ok) {
          //falta el redireccionamiento si la respuesta fue correcta
          const { status, message, newArt: newProd } = await response.json();
          //si la creacion del usuaruio tiene status true
          console.log(status);
          console.log(newProd);
          setStatusResponse(true);

          //navigate("/login", { state: { newProd: newProd } });

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

export default CargaProdForm;