import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtsData } from "../../store/ducks/artesanosDuck";
import Cards from "../cards/Cards";
import TituloSolDeMayo from "../header/TituloSolDeMayo/TituloSolDeMayo";
import SignUpButton from "../sing/SignUpButton";
import UserButton from "../user/userButton";
import home from "./home.module.css";

const Home = () => {
  const userInfo = useSelector((state) => state.rootReducer.user.user);
  const dispatch = useDispatch();

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

  return (
    <div className={home["container"]}>
      <div className={home["logo-singup"]}>
        <TituloSolDeMayo></TituloSolDeMayo>
        {userInfo ? (
          <UserButton
            id={userInfo.googleId}
            displayName={userInfo.displayName}
            photo={userInfo.photo}
          />
        ) : (
          <SignUpButton />
        )}
      </div>
      <Cards></Cards>
    </div>
      // <Parallax></Parallax>
  );
};
export default Home;
