import PropTypes from "prop-types";

const ContainerBase = ({ style, children }) => {
  return <div style={style}>{children && children}</div>;
};

ContainerBase.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default ContainerBase;
