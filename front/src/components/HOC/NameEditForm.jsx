import PropTypes from "prop-types";
import { useState } from "react";
import { cleanFormErrorsArtesano } from "../../store/ducks/errorsDuck";
import {
  column,
  errorStyle,
  inputStyle,
  labelStyle,
  primaryColor,
} from "../../utils/constantes";
import { validate } from "../../utils/validations";
import InputText from "../Input.jsx/InputText";
import HOCForm from "./HOCForm";
import MyForm from "./MyForm";

const endpoint = import.meta.env.VITE_PUT_ART_INFO;
const selector = (state) => state.rootReducer.art.artLoginData;
const errorSelector = (state) => state.rootReducer.errors.formErrorsArt;
const modificarInfo = () => {
  // console.log("VOY A MODIFICAR EL ESTADO GLOBAL DEL USUARIO");
  };
const callback = () => {
  modificarInfo();
};
const NameEditForm = ({
  cancelButton,
  handleSubmit,
  formData,
  handleChange,
  statusResponse,
  formSubmitted,
  errors,
}) => {
  const [showEditMarca, setShowEditMarca] = useState(false);
  const [showEditMIntro, setShowEditIntro] = useState(false);
  const [showEditTel, setShowEditTel] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);

  return (
    <div style={column}>
      <MyForm
        statusResponse={statusResponse}
        formSubmitted={formSubmitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelButton={cancelButton}
      >
        <button
          style={{
            backgroundColor: `${primaryColor}`,
            color: "white",
          }}
          type='button'
          onClick={() => {
            setShowEditMarca(!showEditMarca);
          }}
        >
          Editar nombre de la Marca
        </button>
        <div
          style={{
            display: showEditMarca ? "flex" : "none",
          }}
        >
          <InputText
            p='Marca'
            htmlFor='username'
            value={formData["username"]}
            onChange={handleChange}
            error={errors.username}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
        </div>
        <button
          style={{
            backgroundColor: `${primaryColor}`,
            color: "white",
          }}
          type='button'
          onClick={() => {
            setShowEditTel(!showEditTel);
          }}
        >
          Editar número de Teléfono
        </button>
        <div
          style={{
            display: showEditTel ? "flex" : "none",
          }}
        >
          <InputText
            p='Tel'
            htmlFor='tel'
            value={formData["tel"]}
            onChange={handleChange}
            error={errors.tel}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
        </div>
        <button
          style={{
            backgroundColor: `${primaryColor}`,
            color: "white",
          }}
          type='button'
          onClick={() => {
            setShowEditEmail(!showEditEmail);
          }}
        >
          Editar correo electrónico
        </button>
        <div
          style={{
            display: showEditEmail ? "flex" : "none",
          }}
        >
          <InputText
            p='Email'
            htmlFor='email'
            value={formData["email"]}
            onChange={handleChange}
            error={errors.email}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
        </div>
        <button
          style={{
            backgroundColor: `${primaryColor}`,
            color: "white",
          }}
          type='button'
          onClick={() => {
            setShowEditIntro(!showEditMIntro);
          }}
        >
          Editar Intro a tú perfil
        </button>
        <div
          style={{
            display: showEditMIntro ? "flex" : "none",
          }}
        >
          <InputText
            p='Intro'
            htmlFor='intro'
            value={formData["intro"]}
            onChange={handleChange}
            error={errors.intro}
            labelStyle={labelStyle}
            inputStyle={inputStyle}
            errorStyle={errorStyle}
          />
        </div>
      </MyForm>

      {/* <LoadingSpinner /> */}
    </div>
  );
};

NameEditForm.propTypes = {
  fontWeight: PropTypes.string,
  cancelButton: PropTypes.func,
  handleSubmit: PropTypes.func,
  formData: PropTypes.object,
  handleChange: PropTypes.func,
  statusResponse: PropTypes.bool,
  formSubmitted: PropTypes.bool,
  errors: PropTypes.object,
};

const HOCNameEditForm = HOCForm({
  Component: NameEditForm,
  endpoint,
  selector,
  cleanFormErrors: cleanFormErrorsArtesano,
  validate,
  errorSelector,
  method: "PUT",
  callback,
});

export default HOCNameEditForm;
