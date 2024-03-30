import { useEffect, useRef } from "react";
import "./paralax.module.css"; // Asegúrate de importar tu archivo CSS

const Parallax = () => {
  const footerRef = useRef(null);
  const scrollAnimateMainRef = useRef(null);
  const headerRef = useRef(null);

  const scrollFooter = (scrollY, heightFooter) => {
    if (scrollY >= heightFooter) {
      footerRef.current.style.bottom = "0px";
    } else {
      footerRef.current.style.bottom = "-" + heightFooter + "px";
    }
  };

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const footerHeight = footerRef.current.offsetHeight;
    const heightDocument =
      windowHeight +
      document.querySelector(".content").offsetHeight +
      footerHeight -
      20;

    document.querySelector(
      "#scroll-animate, #scroll-animate-main"
    ).style.height = heightDocument + "px";

    headerRef.current.style.height = windowHeight + "px";
    headerRef.current.style.lineHeight = windowHeight + "px";

    document.querySelector(".wrapper-parallax").style.marginTop =
      windowHeight + "px";

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = () => {
      const scroll = window.scrollY;

      scrollAnimateMainRef.current.style.top = "-" + scroll + "px";
      headerRef.current.style.backgroundPositionY =
        50 - (scroll * 100) / heightDocument + "%";

      scrollFooter(scroll, footerHeight);
    };
  }, []);

  return (
    <div id='scroll-animate'>
      <div id='scroll-animate-main' ref={scrollAnimateMainRef}>
        <div className='wrapper-parallax'>
          <header ref={headerRef}>
            <h1>Header</h1>
          </header>

          <section className='content'>
            <h1>Content</h1>
          </section>

          <footer ref={footerRef}>
            <h1>Footer</h1>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
