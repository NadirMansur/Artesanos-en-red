import PropTypes from "prop-types";
import { cleanFormErrorsArtesano } from "../../store/ducks/errorsDuck";
import {
  column,
  errorStyle,
  inputStyle,
  labelStyle,
} from "../../utils/constantes";
import { validate } from "../../utils/validations";
import InputText from "../Input.jsx/InputText";
import HOCForm from "./HOCForm";
import MyForm from "./MyForm";

const endpoint = " pepe "; // CREAR ENPOINT QUE SIRVA PARA TODOS LOS INPUTS DE INFO import.meta.env.VITE_CREATE_PROD;
const selector = (state) => state.rootReducer.art.artLoginData;
const errorSelector = (state) => state.rootReducer.errors.formErrorsArt;
const NameEditForm = ({
  cancelButton,
  handleSubmit,
  formData,
  handleChange,
  statusResponse,
  formSubmitted,
  errors,
}) => {
  return (
    <div style={column}>
      <MyForm
        statusResponse={statusResponse}
        formSubmitted={formSubmitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelButton={cancelButton}
      >
        <InputText
          p='Marca'
          htmlFor='marca'
          value={formData["marca"]}
          onChange={handleChange}
          error={errors.marca}
          labelStyle={labelStyle}
          inputStyle={inputStyle}
          errorStyle={errorStyle}
        />
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
});

export default HOCNameEditForm;
