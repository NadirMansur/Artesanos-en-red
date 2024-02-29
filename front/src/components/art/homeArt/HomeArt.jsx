import React, { useState, useEffect } from "react";
import emp from "./homeArt.module.css";
import { useLocation } from "react-router-dom";
import CreateRubro from "../../createRubro/CreateRubro";
import SelectRubro from "../../select/Select";
import UpImg from "../../upImg/UpImg";
import CargaProdForm from "../../cargaProdForm/CargaProdForm";
import Menu from "../../menu/Menu";

const HomeArt = (props) => {
  const location = useLocation();
  const [art, setArt] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (location.state) {
      setArt(location.state.art);
    } else if (props.name) {
      setArt(props);
    }
  }, []);

  const handleFileChange = (event) => {
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
              rubro={art.rubro}
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
                    defaultValue={art.username}
                  />
                </label>
                <label>
                  <p>Rubro:</p>
                  <SelectRubro
                    className={emp["input"]}
                    type='text'
                    name='rubro'
                    defaultValue={art.rubro}
                    art={art}
                  ></SelectRubro>
                </label>
                <label>
                  <p>Telefono de contacto:</p>
                  <input
                    className={emp["input"]}
                    type='text'
                    name='tel'
                    defaultValue={art.tel}
                  />
                </label>
                <label>
                  <p>email:</p>
                  <input
                    className={emp["input"]}
                    type='text'
                    name='email'
                    defaultValue={art.email}
                  />
                </label>
              </div>
              <UpImg thumbnail={thumbnail} onChange={handleFileChange} />
            </div>
            <label>
              <p>intro:</p>
              <textarea
                className={emp["intro-input"]}
                name='intro'
                defaultValue={art.intro}
              />
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
