import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoutIcon from "../../assets/iconos/logoutIcon.png";
import { photoProfile, photo_profile_container } from "../../utils/constantes";
import Icon from "../Icon/Icon";
import userButton from "./userButton.module.css";

const UserButton = ({ photo, displayName, onClick }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const marginLeft = isMobile ? "5em" : "5em";

  return (
    <div>
      <Icon
        icon={logoutIcon}
        onClick={onClick}
        position='absolute'
        marginLeft={marginLeft}
        marginBottom='0%'
        id='photo-profile-logout'
        width='1.5rem'
        height='1.5rem'
      ></Icon>
      <Link to={`/homeart`}>
        <div className={userButton["user-button-container"]}>
          <div style={photo_profile_container}>
            <img src={photo} alt={displayName} style={photoProfile} />
          </div>
          <h4 className={userButton["user-button-display-name"]}>
            {displayName}
          </h4>
        </div>
      </Link>
    </div>
  );
};

UserButton.propTypes = {
  displayName: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserButton;
