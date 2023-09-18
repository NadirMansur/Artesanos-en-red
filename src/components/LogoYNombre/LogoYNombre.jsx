import style from './LogoYNombre.module.css';
import logo from './logo.jpg';
export default function LogoYNombre(){
    
    return(
        <div className={style.logoYNombre}>
            <div className={style.centro}>
                <div className={style.cont}>
                    <img className={style.imagen} src={logo} alt='logo' />
                </div>
                <div className={style.tituloh1}>
                    <h1>
                        Moniguetes Juegos
                    </h1>
                </div>
            </div>
        </div>
    );
}