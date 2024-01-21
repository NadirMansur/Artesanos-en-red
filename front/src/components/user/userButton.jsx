import React from "react";
import userButton from "./userButton.module.css";
import { Link } from "react-router-dom";

const UserButton = ({ id, photo, displayName }) => {
  return (
    <div className={userButton["user-button-container"]}>
      <div className={userButton["user-button-image-container"]}>
        <img
          src={photo}
          alt={displayName}
          className={userButton["user-button-image"]}
        />
      </div>
      <Link to={`/user/${id}`}>
        <h4 className={userButton["user-button-display-name"]}>
          {displayName}
        </h4>
      </Link>
    </div>
  );
};

export default UserButton;
