import PropTypes from 'prop-types';
import sing from '../success/successLogin.module.css';
import { useState, useEffect } from 'react';
import AvatarPerfil from '../../../card/perfilCard/avatarPerfil/AvatarPerfil';
import withStateProps from '../../../HOC/withStateProps';

const SuccessCreate = (props) => {
  const { state } = props;
  const [art, setArt] = useState(null);
  
  useEffect(() => {
    setArt(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={sing["container"]}>
      <h2 className={sing["h2"]}>Se creó usuario satisfactoriamente</h2>
      <h4 className={sing["h4"]}>
        Para poder publicar productos debes ser dado de alta por el
        administrador
      </h4>
      <h4 className={sing["h4"]}>
        Una vez dado de alta vas a ingresar con tu nombre de usuario{" "}
        <div className={sing["container-usuario"]}>
          <div className={sing["container-h2"]}>
            <h2 className={sing["h2"]}>{art && art.username}</h2>
          </div>
          {art && <AvatarPerfil img={art.img_perfil} />}
        </div>
        y tu contraseña!!!
      </h4>
    </div>
  );
};

SuccessCreate.propTypes = {
  state: PropTypes.shape({
    status: PropTypes.bool,
    id: PropTypes.number,
    username: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    img_perfil: PropTypes.string,
  }).isRequired,
};

const ExportedSuccessCreate = withStateProps(SuccessCreate);

export default ExportedSuccessCreate;