import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Icon = ({
  icon,
  onClick,
  position,
  marginLeft,
  marginBottom,
  id,
  width,
  height,
}) => {
  const [hobber, setHobber] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHobber(true);
    };

    const handleMouseLeave = () => {
      setHobber(false);
    };

    const divElement = document.getElementById(id);
    divElement.addEventListener("mouseenter", handleMouseEnter);
    divElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      divElement.removeEventListener("mouseenter", handleMouseEnter);
      divElement.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={onClick}
      id={id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        backgroundColor: hobber ? "white" : "grey",
        borderRadius: "50%",
        position: position,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        zIndex: 2,
      }}
    >
      <img
        style={{
          position: "relative",
          width: "50%",
          marginBlock: "10%",
        }}
        src={icon}
        alt='icono'
      ></img>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Icon;
