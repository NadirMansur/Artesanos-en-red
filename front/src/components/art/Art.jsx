"use client";
import { Heart } from "phosphor-react";
import { Avatar, Card } from "keep-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import art from "./art.module.css";
import perfil from "../../assets/Club_Sol_de_mayo.png";
import CartaProd from "../card/cartaProducto/CartaProd.jsx";
const Art = () => {
  const { id } = useParams();

  // useEffect(() => {
  //     axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
  //        if (data.name) {
  //           setCharacter(data);
  //        } else {
  //           window.alert('No hay personajes con ese ID');
  //        }
  //     });
  //     return setCharacter({});
  //  }, [id]);

  return (
    <div className={art["page"]}>
      <Card.Container className='absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200'>
        <Heart size={20} weight='bold' color='white' />
      </Card.Container>
      <div className={art["photo-port-container"]}>
        <img
          src='https://images.prismic.io/staticmania/821cee7b-6b44-48c4-ab95-8a525056489d_blog.jpg?auto=compress,format'
          className={art["photo-port"]}
        ></img>
      </div>
      <div className={art["info"]}>
        <div className={art["photo-profile-container"]}>
          <img src={perfil}></img>
        </div>
        <div>
          <Card.Container className='mb-3 mt-10 text-center'>
            <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
              <div className={art["name"]}>Khairul Islam</div>
            </Card.Title>
            <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
              <div className={art["rubro"]}>UI/UX Designer</div>
            </Card.Title>
          </Card.Container>
        </div>
      </div>
      <div className={art["prod"]}>
        <CartaProd />
        <CartaProd />
        <CartaProd />
        <CartaProd />
        <CartaProd />
        <CartaProd />
        <CartaProd />
      </div>
      <Link to={`/`} /*className={styles.volver}*/>
        <div>VOLVER ATRAS</div>
      </Link>
    </div>
  );
};

export default Art;
