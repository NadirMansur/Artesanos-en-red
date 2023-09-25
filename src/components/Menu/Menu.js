import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import Boton from "./Boton/Boton";

const MenuFotos = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.contenedor1}>
        <Link style={{ textDecoration: "none" }} t='/abaut'>
          <Boton
            backgroundImage={
              "https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/115803491_1687936108032203_4522295466266410749_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=dioJpdvxSE0AX8weO3c&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfBDFDy2iX9VxowI1ky-Emp7oGSIBVZ3tE_nxEc1pKwQsA&oe=652FD3BD"
            }
            text='Sobre Mi '
          ></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            backgroundImage={
              "https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/118083688_1716197801872700_6387123095700351776_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MZmr38P2tOYAX8IpJI1&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfAzz0Jwl_LwnFEl06FbvzI3cQn6USU2pnT3TdF1YIPcxw&oe=65300564"
            }
            text='Prod '
          ></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            backgroundImage={
              "https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/110009304_1685947814897699_4209418269116334731_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Kd4NaWpObUEAX_tef5Y&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfA1FW0XoEcekcRbkclrISJRc5gjAOVtawGOeXEC-DCp3Q&oe=652FFBD9"
            }
            text='Taller '
          ></Boton>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/productos'>
          <Boton
            text='Ferias '
            backgroundImage={
              "https://scontent.fmdq3-1.fna.fbcdn.net/v/t1.6435-9/117889686_1712482502244230_5559515812932910205_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LbyEKcvmfSEAX8ft9bX&_nc_ht=scontent.fmdq3-1.fna&oh=00_AfD-V-s7uZ31NXqS_Bx1Q08tOjd8kFhGicvbaXSydgpP9w&oe=652FF475"
            }
          ></Boton>
        </Link>
      </div>
    </div>
  );
};

export default MenuFotos;
