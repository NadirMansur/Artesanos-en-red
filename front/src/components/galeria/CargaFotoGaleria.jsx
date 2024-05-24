import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanFormErrorsProd,
  setFormErrorsProducto,
} from "../../store/ducks/errorsDuck";
import styles from "../cargaProdForm/cargaProdFrom.module.css";
import UpImg from "../upImg/UpImg";

const CargaFotoGaleria = () => {
  const endpoint = import.meta.env.VITE_POST_PHOTO;
  const art = useSelector((state) => state.rootReducer.art.artLoginData);

  const errors = useSelector(
    (state) => state.rootReducer.errors.formErrorsProd
  );
  const dispatch = useDispatch();

  const [statusResponse, setStatusResponse] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [messageResponse, setMessageResponse] = useState(null);

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
      setSelectedFile(null);
      setThumbnail(null);
      setFormSubmitted(false);
    }
    // eslint-disable-next-line
  }, [statusResponse]);

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
    dispatch(
      setFormErrorsProducto({
        ...errors,
        rubro: "",
      })
    );

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
      const formDataBody = new FormData();
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
          const { status, message } = await response.json();
          if (status) {
            setStatusResponse(status);
            setMessageResponse(message);
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
    <div className={styles["form-component"]}>
      <div className={styles["form-container"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <label>
            <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
            {errors.img != "" ? (
              <span className={styles["span-alert"]}>{errors.img}</span>
            ) : null}
          </label>
        </form>
      </div>
      <button
        type='submit'
        className={styles["button"]}
        disabled={formSubmitted}
        onClick={handleSubmit}
      >
        {!statusResponse
          ? formSubmitted
            ? "Enviando..."
            : "Subir a Galería"
          : "Subida!"}
      </button>
      {statusResponse && (
        <button
          type='submit'
          className={styles["button"]}
          disabled={formSubmitted}
          onClick={resetButton}
        >
          Subir otra
        </button>
      )}
    </div>
  );
};

export default CargaFotoGaleria;
