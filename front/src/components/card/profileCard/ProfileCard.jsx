import PropTypes from "prop-types";
import useIsMobile from "../../../hooks/useIsMobile";
import {
  h2Style,
  pStyle,
  primaryContainer,
  secondaryContainer,
} from "../../../utils/constantes";
import ContainerBase from "../../containers/containerBase";

import emp from "./profileCard.module.css";

const ProfileCard = ({ art /* handleEditMarca */ }) => {
  const isMobile = useIsMobile();

  return (
    <ContainerBase
      style={
        isMobile
          ? { ...primaryContainer, flexDirection: "column" }
          : primaryContainer
      }
    >
      <ContainerBase style={{ ...secondaryContainer, flexDirection: "row" }}>
        <div className={emp["photo-profile-container"]}>
          {/* <Icon
            icon={editIcon}
            onClick={() => {}}
            position='absolute'
            marginLeft='70%'
            marginBottom='0%'
            id='photo-profile-edit'
            width='1.5rem'
            height='1.5rem'
          ></Icon> */}
          <img src={art.img_perfil} className={emp["photo-profile"]}></img>
        </div>
        <div className={emp["basic-info"]}>
          <div className={emp["relative-container"]}>
            {/* <Icon
              icon={editIcon}
              onClick={handleEditMarca}
              position='absolute'
              marginLeft='90%'
              // marginBottom='0%'
              id='name-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon> */}
            <h2 style={h2Style}>{art.username}</h2>
          </div>
          <p style={pStyle}>{art.rubro}</p>
          <div className={emp["relative-container"]}>
            {/* <Icon
              icon={editIcon}
              onClick={() => {}}
              position='absolute'
              marginLeft='72%'
              // marginBottom='100%'
              id='tel-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon> */}
            <p style={pStyle}>{art.tel}</p>
          </div>
          <div className={emp["relative-container"]}>
            {/* <Icon
              icon={editIcon}
              onClick={() => {}}
              position='absolute'
              marginLeft='100%'
              // marginBottom='0%'
              id='email-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon> */}
            <p style={pStyle}>{art.email}</p>
          </div>
        </div>
      </ContainerBase>

      <ContainerBase style={secondaryContainer}>
        {/* <Icon
          icon={editIcon}
          onClick={() => {}}
          position='absolute'
          marginLeft='100%'
          // marginBottom='50%'
          id='intro-edit'
          width='1.5rem'
          height='1.5rem'
        ></Icon> */}
        <p style={pStyle}>{art.intro}</p>
      </ContainerBase>
    </ContainerBase>
  );
};
ProfileCard.propTypes = {
  art: PropTypes.shape({
    intro: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    rubro: PropTypes.string,
    username: PropTypes.string.isRequired,
    img_perfil: PropTypes.string.isRequired,
  }).isRequired,
  handleEditMarca: PropTypes.func.isRequired,
};
export default ProfileCard;
