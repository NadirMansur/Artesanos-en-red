import Header from "../header/Header";
import TituloSolDeMayo from "../header/TituloSolDeMayo/TituloSolDeMayo";
import Cards from "../cards/Cards";
import home from "./home.module.css";
import SignUpButton from "../sing/SignUpButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtsData } from "../../store/ducks/artesanosDuck";
import { useEffect } from "react";
import UserButton from "../user/userButton";
import GoogleButtonComponent from "../sing/button/GoogleButtonComponent";



const Home = () => {
  const userInfo = useSelector((state) => state.rootReducer.user.user);
  console.log(userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    // Este useEffect se ejecutará cada vez que userInfo cambie

    if (userInfo) {
      console.log("Data del usuario cargada:", userInfo);
      // Puedes realizar más acciones aquí si es necesario
    } else {
      console.log("La información del usuario es nula.");
      // Puedes realizar acciones específicas cuando la información del usuario es nula
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
  );
};
export default Home;
