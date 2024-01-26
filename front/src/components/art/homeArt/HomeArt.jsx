import React, { useState, useEffect } from "react";
import emp from "./homeArt.module.css";
import { useLocation } from "react-router-dom";

const HomeArt = (props) => {
  const location = useLocation();
  const [art, setArt] = useState(null);

  useEffect(() => {
    if (location.state) {
      setArt({
        username: location.state.art.username,
        rubro: location.state.art.rubro,
        img_perfil: location.state.art.img_perfil,
      });
    } else if (props.name) {
      setArt({
        name: props.name,
        rubro: props.rubro,
        img_perfil: props.img_perfil,
      });
    }
  }, []);

  return (
    <div>
      {art ? (
        <div>
          <div className={emp["photo-profile-container"]}>
            <img src={art.img_perfil} className={art["photo-profile"]}></img>
          </div>
          <div className={emp["card-container-column"]}>
            <p className={emp["name"]}>{art.username}</p>
            <p className={emp["rubro"]}> !!RUBRO!!{/*art.rubro*/}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomeArt;

const art = {
  id: 24,
  username: "prueba12",
  status: false,
  tel: "2235162544",
  email: "nadirmansur89@gmail.com",
  img_perfil:
    "https://res.cloudinary.com/df1h3xxj9/image/upload/v1706209486/hjj1x0zgn5v8m303s0t5.jpg",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus neque. Suspendisse potenti. Suspendisse nec justo eu massa convallis sodales. Vestibulum ultrices, ex at tincidunt tincidunt, mauris justo commodo libero, non ullamcorper elit tortor non turpis. In hac habitasse platea dictumst.",
  createdAt: "2024-01-25T19:04:48.675Z",
  updatedAt: "2024-01-25T19:04:48.675Z",
  deletedAt: null,
};
