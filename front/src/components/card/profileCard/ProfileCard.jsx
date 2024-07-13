import PropTypes from "prop-types";
import editIcon from "../../../assets/iconos/editar.png";
import useIsMobile from "../../../hooks/useIsMobile";
import {
  h2Style,
  pStyle,
  photoProfile,
  photo_profile_container,
  primaryContainer,
  secondaryContainer,
} from "../../../utils/constantes";
import ContainerBase from "../../containers/containerBase";
import Icon from "../../Icon/Icon";

import emp from "./profileCard.module.css";

const ProfileCard = ({ art, handleEditMarca }) => {
  const isMobile = useIsMobile();
  const marginLeft = isMobile ? "15em" : "0rem";
  return (
    <ContainerBase
      style={
        isMobile
          ? { ...primaryContainer, flexDirection: "column", width: "20em" }
          : primaryContainer
      }
    >
      <Icon
        icon={editIcon}
        onClick={handleEditMarca}
        position='absolute'
        marginLeft={marginLeft}
        marginBottom='0%'
        id='personal-info-edit'
        width='3rem'
        height='3rem'
      ></Icon>
      <ContainerBase
        style={
          isMobile
            ? secondaryContainer
            : { ...secondaryContainer, flexDirection: "row" }
        }
      >
        <div style={photo_profile_container}>
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
          <img src={art.img_perfil} style={photoProfile}></img>
        </div>
        <div className={emp["basic-info"]}>
          <div className={emp["relative-container"]}>
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
