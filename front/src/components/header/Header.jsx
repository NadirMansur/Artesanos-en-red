"use client";
import bandera from "../../assets/Flag_of_Argentina.svg.png";
import header from "./header.module.css";

const Header = () => {
  return (
    <div className={header["container"]}>
      <img src={bandera} />
    </div>
  );
};

export default Header;
