import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtsData } from "../../store/ducks/artesanosDuck";
import { backgroundColor, primaryColor } from "../../utils/constantes";
import Cards from "../cards/Cards";
import TituloSolDeMayo from "../header/TituloSolDeMayo/TituloSolDeMayo";
import HOCcargaGratuitaMessage from "../message/CargaGratuitaMessage";
import home from "./home.module.css";

const Home = () => {
  const userInfo = useSelector((state) => state.rootReducer.user.user);
  const dispatch = useDispatch();
  const artesanos = useSelector((state) => state.rootReducer.arts.arts);
  const [artFlag, setArtFlag] = useState(false);

  useEffect(() => {
    if (userInfo) {
      console.log("Data del usuario cargada:", userInfo);
    } else {
      console.log("La información del usuario es nula.");
    }
  }, [userInfo]);

  useEffect(() => {
    //fetch data artesanos
    dispatch(fetchArtsData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (artesanos) {
      if (artesanos.length > 0) {
        setArtFlag(true);
      }
    }
  }, [artesanos]);

  // crear componente con MENSAJE
  return (
    <div className={home["container"]}>
      <div className={home["logo-singup"]}>
        <TituloSolDeMayo></TituloSolDeMayo>
        {/* {userInfo ? (
          <UserButton
            id={userInfo.googleId}
            displayName={userInfo.displayName}
            photo={userInfo.photo}
          />
        ) : (
          <SignUpButton />
        )} */}
        <Link to='/login'>
          <button className={home["button"]}>Ingresar</button>
        </Link>
      </div>
      {!artFlag && (
        <HOCcargaGratuitaMessage
          height='fit-content'
          width='18rem'
          color={primaryColor}
          backgroundColor={backgroundColor}
          fontSize='1rem'
          fontWeight='bold'
        />
      )}
      <Cards></Cards>
    </div>
    // <Parallax></Parallax>
  );
};
export default Home;
