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

const endpoint = import.meta.env.VITE_PUT_ART_INFO;
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
          htmlFor='username'
          value={formData["username"]}
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
