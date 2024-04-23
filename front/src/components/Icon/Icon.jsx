import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Icon = ({ icon, onClick }) => {
  const [hobber, setHobber] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHobber(true);
    };

    const handleMouseLeave = () => {
      setHobber(false);
    };

    const divElement = document.getElementById("icon-button");
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
      id='icon-button'
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        backgroundColor: hobber ? "white" : "grey",
        borderRadius: "50%",
        position: "absolute",
        marginLeft: "95%",
        marginBottom: "18%",
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
};

export default Icon;
