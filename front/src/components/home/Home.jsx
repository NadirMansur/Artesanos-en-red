import Header from "../header/Header";
import TituloSolDeMayo from "../header/TituloSolDeMayo/TituloSolDeMayo";
import Cards from "../cards/Cards";
import home from "./home.module.css";
import SignUpButton from "../sing/button/SignUpButton";

const Home = () => {
  return (
    <div className={home["container"]}>
      <Header></Header>
      <div className={home["logo-singup"]}>
      <TituloSolDeMayo></TituloSolDeMayo>
      <SignUpButton></SignUpButton>
      </div>
      <Cards></Cards>
    </div>
  );
};
export default Home;
