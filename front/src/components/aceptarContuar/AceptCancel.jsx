import PropTypes from "prop-types";
import {
    //   h2Style,
    //   pStyle,
    //   photoProfile,
    //   photo_profile_container,
    //   primaryContainer,
    secondaryContainer,
} from "../../utils/constantes";
import ContainerBase from "../containers/containerBase";

const AceptCancel = (props) => {
  return (
    <ContainerBase style={secondaryContainer}>
      {props.children && props.children}
      <button onClick={props.onConfirm}>Aceptar</button>
    </ContainerBase>
  );
};

export default AceptCancel;

AceptCancel.propTypes = {
  children: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
