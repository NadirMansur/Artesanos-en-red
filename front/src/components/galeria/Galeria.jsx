import sing from "../sing/singUpArt/singUp.module.css";
import gal from "./galeria.module.css";

const Galeria = (props) => {
  //console.log(props);
  const { galeria } = props;
  //console.log(galeria);
  return (
    <div className={gal["row"]}>
      {galeria.map((columna, i) => {
        return (
          <div className={gal["column"]}>
            {columna.map((img, i) => {
              return <img src={img}></img>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Galeria;
