
import style from '../Landing/Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = ()=>{
    return(
        <div className={style.landing}>
         <div className={style.in}>
                <div>
                    <h3>Bienvenido a Moniguetes Juegos! aqui podras encontrar distintos juegos didacticos e informacion sobre las artesanias</h3>
                    
                </div>
                <div><h3>¡A por ello!</h3></div>
                <Link to="/home">
                    <button className={style.button}> Entrar!
                    </button>
                </Link>
         </div>
         <div>
            aca va el FUTTER
         </div>
        </div>
    );
};
export default Landing;