import PropTypes from "prop-types";
import { primaryColor } from "../../utils/constantes";
import { mensajeCargaHome } from "../../utils/mensajes";
import HOCMessage from "../HOC/HOCMessage";
import LoadingSpinner from "../loading/LoadingSinper";
import Message from "./Message";

const CargaGratuitaMessage = ({ fontWeight }) => {

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Message
        message={mensajeCargaHome}
        color={primaryColor}
        fontSize='1rem'
        fontWeight={fontWeight}
      />
      <LoadingSpinner />
      <button
        style={{
          backgroundColor: primaryColor,
          color: "white",
        }}
        onClick={handleClick}
      >
        {"Recargar"}
      </button>
    </div>
  );
};

CargaGratuitaMessage.propTypes = {
  fontWeight: PropTypes.string,
};

const HOCcargaGratuitaMessage = HOCMessage(CargaGratuitaMessage);

export default HOCcargaGratuitaMessage;
