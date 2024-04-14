import PropTypes from "prop-types";

const HOCMessage = (Component) => {
  const WithProps = (props) => {
    const { height, width, color, backgroundColor, fontSize } = props;
    return (
      <div
        style={{
          color: color,
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          fontSize: fontSize,
          boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          borderRadius: "1rem",
          alignSelf: "center",
        }}
      >
        <Component {...props} />
      </div>
    );
  };

  WithProps.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
  };

  return WithProps;
};

export default HOCMessage;
