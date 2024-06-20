import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";
import { primaryModalContainer } from "../../utils/constantes";
import ContainerBase from "../containers/containerBase";

const Modal = (props) => {
  const [hideScrollbar, setHideScrollbar] = useState(false);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const checkOverflow = () => {
        const hasOverflow =
          divRef.current.scrollHeight > divRef.current.clientHeight;
        setHideScrollbar(!hasOverflow);
      };
      if (divRef.current.scrollHeight !== 226) checkOverflow();
      window.addEventListener("resize", checkOverflow);
    }
  }, [props.children]);

  return (
    <div style={{ opacity: "1" }}>
      {props.open && (
        <ContainerBase style={primaryModalContainer}>
          <div
            ref={divRef}
            style={{
              overflowY: !hideScrollbar ? "scroll" : "hidden",
              maxHeight: "48rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {props.children && props.children}
            <button onClick={props.closePopup}>Cerrar</button>
          </div>
        </ContainerBase>
      )}
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default Modal;
