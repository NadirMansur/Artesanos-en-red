"use client";
//import bandera from "../../assets/Flag_of_Argentina.svg.png";
import { useEffect, useRef, useState } from "react";
import header from "./header.module.css";

const Header = () => {
   const parallaxRef = useRef();
   const captionRef = useRef();

  const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const yOffset = window.scrollY;
  //     parallaxRef.current.style.transform = `translateZ(-1px) scale(2) translateY(${
  //       yOffset * 0.5
  //     }px)`;
  //     setIsFixed(yOffset > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={header["header-container"]}
    >
        <div
          className={`${isFixed ? header[["fixed-caption"]] : header["caption-none"]}`}
        >
          <span className={header["border"]}>Emprendedores en Red</span>
        </div>
      <div ref={parallaxRef} className={header["bgimg-1"]}>
        <div
          className={`${isFixed ? header[["caption-none"]] : header["caption"]}`}
        >
          <span className={header["border"]}>Emprendedores en Red</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
