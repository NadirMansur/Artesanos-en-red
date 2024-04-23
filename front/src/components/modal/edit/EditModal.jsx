import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    cleanFormErrorsArtesano,
    setFormErrorsArtesano,
} from "../../../store/ducks/errorsDuck";
import { validate } from "../../../utils/validations";
import UpImg from "../../upImg/UpImg";
import emp from "./editModal.module.css";

const EditModal = ({ handleCloseModal, handleSumbitModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.rootReducer.errors.formErrorsArt);
  const isMountedRef = useRef(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    intro: "",
  });

  useEffect(() => {
    isMountedRef.current = true;
    return () => (
      dispatch(cleanFormErrorsArtesano({})), (isMountedRef.current = false)
    );
    // eslint-disable-next-line
  }, []);

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    validate(e, null, dispatch, errors);
  };

  return (
    <div className={emp["modal"]}>
      <div className={emp["card-container-column"]}>
        <span>Aqui podras editar tu informacion personal</span>
      </div>
      <form className={emp["form"]}>
        <div className={emp["form-inputs-img"]}>
          <div className={emp["form-inputs"]}>
            <label>
              <p>Username / Marca:</p>
              <input
                className={emp["input"]}
                type='text'
                name='username'
                placeholder='nombre / marca'
                defaultValue={data.name}
                onChange={handleFormChange}
                required
              />
            </label>
            <label>
              <p>email:</p>
              <input
                className={emp["input"]}
                type='text'
                name='email'
                placeholder='email'
                defaultValue={data.email}
                onChange={handleFormChange}
                required
              />
              {errors.email != "" ? (
                <span className={emp["span-alert"]}>{errors.email}</span>
              ) : null}
            </label>
            <label>
              <p>Telefono de contacto:</p>
              <input
                className={emp["input"]}
                type='text'
                name='tel'
                placeholder='tel'
                defaultValue={data.tel}
                onChange={handleFormChange}
                required
              />
              {errors.tel != "" ? (
                <span className={emp["span-alert"]}>{errors.tel}</span>
              ) : null}
            </label>
            <label>
              <p>intro:</p>
              <textarea
                className={emp["intro-input"]}
                type='text'
                name='intro'
                defaultValue={data.intro}
                onChange={handleFormChange}
                required
              />
              {errors.intro != "" ? (
                <span className={emp["span-alert"]}>{errors.intro}</span>
              ) : null}
            </label>
          </div>
          <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
        </div>
      </form>
      <div className={emp["buttons"]}>
        <button className={emp["boton"]} onClick={handleCloseModal}>
          Cerrar
        </button>
        <button className={emp["boton"]} onClick={handleSumbitModal}>
          Aplicar
        </button>
      </div>
    </div>
  );
};

EditModal.propTypes = {
  handleSumbitModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default EditModal;
