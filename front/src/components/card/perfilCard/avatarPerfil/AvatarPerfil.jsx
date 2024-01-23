import avatar from "./avatarPerfil.module.css"

const AvatarPerfil = (props) => {
    const {img} = props
    return (
        <div className={avatar["container"]}>
            <img src={img} className={avatar["profile-image"]}></img>
        </div>
    )
};

export default AvatarPerfil;
