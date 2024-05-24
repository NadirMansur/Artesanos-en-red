import PropTypes from "prop-types";

const InputText = ({
  htmlFor,
  value,
  onChange,
  error,
  p,
  labelStyle,
  inputStyle,
  errorStyle,
}) => {
  return (
    <label htmlFor={htmlFor} style={labelStyle}>
      <p>{p}</p>
      <input
        type='text'
        id={htmlFor}
        name={htmlFor}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
      {error != "" ? <span style={errorStyle}>{error}</span> : null}
    </label>
  );
};

InputText.propTypes = {
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  p: PropTypes.string,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  errorStyle: PropTypes.object,
};
export default InputText;
