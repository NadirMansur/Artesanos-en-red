import PropTypes from "prop-types";
import editIcon from "../../../assets/iconos/editar.png";
import Icon from "../../Icon/Icon";
import emp from "./ProfileCard.module.css";

const ProfileCard = ({ art }) => {
  const handleEdit = () => {};
  return (
    <div className={emp["profile-card"]}>
      <div className={emp["basic-card"]}>
        <div className={emp["photo-profile-container"]}>
          <Icon
            icon={editIcon}
            onClick={handleEdit}
            position='absolute'
            marginLeft='70%'
            marginBottom='0%'
            id='photo-profile-edit'
            width='1.5rem'
            height='1.5rem'
          ></Icon>
          <img src={art.img_perfil} className={emp["photo-profile"]}></img>
        </div>
        <div className={emp["basic-info"]}>
          <div className={emp["relative-container"]}>
            <Icon
              icon={editIcon}
              onClick={handleEdit}
              position='absolute'
              marginLeft='90%'
              // marginBottom='0%'
              id='name-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon>
            <h2 className={emp["name"]}>{art.username}</h2>
          </div>
          <p className={emp["rubro"]}>{art.rubro}</p>
          <div className={emp["relative-container"]}>
            <Icon
              icon={editIcon}
              onClick={handleEdit}
              position='absolute'
              marginLeft='72%'
              // marginBottom='100%'
              id='tel-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon>
            <p className={emp["tel"]}>{art.tel}</p>
          </div>
          <div className={emp["relative-container"]}>
            <Icon
              icon={editIcon}
              onClick={handleEdit}
              position='absolute'
              marginLeft='100%'
              // marginBottom='0%'
              id='email-edit'
              width='1.5rem'
              height='1.5rem'
            ></Icon>
            <p className={emp["email"]}>{art.email}</p>
          </div>
        </div>
      </div>

      <div className={emp["intro-container"]}>
        <Icon
          icon={editIcon}
          onClick={handleEdit}
          position='absolute'
          marginLeft='100%'
          // marginBottom='50%'
          id='intro-edit'
          width='1.5rem'
          height='1.5rem'
        ></Icon>
        <p className={emp["intro"]}>{art.intro}</p>
      </div>
    </div>
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
};
export default ProfileCard;
