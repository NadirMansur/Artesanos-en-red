import PropTypes from "prop-types";
import styles from "./message.module.css";

const Message = ({ message }) => {
  return (
    <div className={styles["error"]}>
      <p>{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
