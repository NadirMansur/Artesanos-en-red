import style from "../Home/Home.module.css";
import { Link } from "react-router-dom";
import abaut from './abaut.jpg'; 
import productos from './productos.jpg'; 

const Home = ()=>{  
    return (
        <div className={style.contenedor}>   
            <div>
                <div className={style.contenedorImagen}>
                    <div className={style.texto}>
                        <h2>Abaut</h2>
                    </div>
                    <Link to="/abaut">
                        <img className={style.imagen} src={abaut} alt='abaut'></img>
                    </Link>
                </div>
            </div>    
            <div>
                <div className={style.contenedorImagen}>
                    <div className={style.texto}>
                        <h2>Productos</h2>
                    </div>
                    <Link to="/productos">
                        <img className={style.imagen} src={productos} alt='productos'></img>
                    </Link>
                </div>
            </div>    
        </div>
    );
}

export default Home;