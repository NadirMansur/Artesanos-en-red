import PropTypes from "prop-types";
import AvatarPerfil from "../card/perfilCard/avatarPerfil/AvatarPerfil";
import sing from "./upImg.module.css";

const UpImg = (props) => {
  const { onChange, thumbnail } = props;

  return (
    <div className={sing["container"]}>
      <h2 className={sing["h2"]}>Elegir la foto</h2>
      <div className={sing["upload"]}>
        <label className={sing["button"]} htmlFor='file-input'>
          Subir la foto
        </label>
        <input
          id='file-input'
          type='file'
          onChange={onChange}
          className={sing["file"]}
        />
        {thumbnail ? <AvatarPerfil img={thumbnail} /> : null}
      </div>
    </div>
  );
};

UpImg.propTypes = {
  onChange: PropTypes.func.isRequired,
  thumbnail: PropTypes.string,
};

export default UpImg;
