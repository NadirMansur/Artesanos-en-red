import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import emp from "./homeArt.module.css";
import { useLocation } from "react-router-dom";
import CreateRubro from "../../createRubro/CreateRubro";
import UpImg from "../../upImg/UpImg";
import CargaProdForm from "../../cargaProdForm/CargaProdForm";
import { validate } from "../../../utils/validations";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormErrorsArtesano,
  cleanFormErrorsArtesano,
} from "../../../store/ducks/errorsDuck";
import Menu from "../../menu/Menu";

const HomeArt = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.rootReducer.errors.formErrorsArt);
  const isMountedRef = useRef(null);

  const location = useLocation();
  const [art, setArt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    intro: "",
  });

  useEffect(() => {
    if (location.state) {
      setArt(location.state.art);
    } else if (props.name) {
      setArt(props);
    }
    // eslint-disable-next-line
  }, []);

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
      generateThumbnail(file)
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

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSumbitModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {art ? (
        <div>
          <Menu link={["/"]} text={["Home"]} />
          <div className={emp["profile-card"]}>
            <div className={emp["basic-card"]}>
              <div className={emp["photo-profile-container"]}>
                <img
                  src={art.img_perfil}
                  className={emp["photo-profile"]}
                ></img>
              </div>
              <div className={emp["basic-info"]}>
                <h2 className={emp["name"]}>{art.username}</h2>
                <p className={emp["rubro"]}>{art.rubro}</p>
                <p className={emp["tel"]}>{art.tel}</p>
                <p className={emp["email"]}>{art.email}</p>
              </div>
            </div>
            <div className={emp["card-container-column"]}>
              <p className={emp["intro"]}>{art.intro}</p>
            </div>
            <button className={emp["boton"]} onClick={handleEdit}>
              Editar
            </button>
          </div>
          <div>
            <CargaProdForm
              username={art.username}
            ></CargaProdForm>
            <CreateRubro></CreateRubro>
          </div>
        </div>
      ) : null}

      {isModalOpen ? (
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
              </div>
              <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
            </div>
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
          </form>
          <div className={emp["form"]}>
            <button className={emp["boton"]} onClick={handleCloseModal}>
              Cerrar
            </button>
            <button className={emp["boton"]} onClick={handleSumbitModal}>
              Aplicar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomeArt;

HomeArt.propTypes = {
  name: PropTypes.string,
};
