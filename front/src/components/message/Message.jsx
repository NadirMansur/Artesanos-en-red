import PropTypes from "prop-types";

const Message = ({ message, color, fontSize, fontWeight }) => {
  return (
    <div
      style={{
        color: color,
        fontSize: fontSize,
        margin: "10px 0",
        fontWeight: fontWeight,
      }}
    >
      <p>{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default Message;
