import gal from "./galeria.module.css";

const Galeria = (props) => {
  const { galeria } = props;
  return (
    <div className={gal["row"]}>
      {galeria.map((columna, i) => {
        return (
          <div className={gal["column"]} key={`column_${i}`}>
            {columna.map((img, i) => {
              return <img src={img} key={`img${i}`}></img>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Galeria;
