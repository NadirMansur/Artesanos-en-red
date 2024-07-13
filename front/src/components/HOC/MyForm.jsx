// MyForm.jsx
import PropTypes from "prop-types";
// import { Children } from "react";
import {
  column,
  formComponentStyle,
  formContainerStyle,
  row,
} from "../../utils/constantes";
import styles from "./myForm.module.css";

const MyForm = ({
  statusResponse,
  formSubmitted,
  handleSubmit,
  // cancelButton,
  children,
}) => {
  return (
    <div style={formComponentStyle}>
      <div style={formContainerStyle}>
        <form style={column} onSubmit={handleSubmit}>
          {children && children}
        </form>
      </div>
      <div style={row}>
        <button
          type='submit'
          className={styles["button"]}
          disabled={formSubmitted || statusResponse}
          onClick={handleSubmit}
        >
          {!statusResponse
            ? formSubmitted
              ? "Enviando..."
              : "Cambiar Info"
            : "Info Cambiada"}
        </button>
        {/* {!statusResponse && (
          <button
            type='submit'
            className={styles["button"]}
            disabled={formSubmitted}
            onClick={cancelButton}
          >
            {!statusResponse ? "Cancelar" : "Cerrar"}
          </button>
        )} */}
      </div>
    </div>
  );
};

MyForm.propTypes = {
  statusResponse: PropTypes.bool.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  cancelButton: PropTypes.func.isRequired,
  children: PropTypes.object,
};

// constructor de HOC
export default MyForm;
