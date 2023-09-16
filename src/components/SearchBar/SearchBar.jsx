import style from './SearchBar.module.css';
import { useState } from 'react';

const miEjemplo = {id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}  

export default function SearchBar({onSearch}) {
   const [id,setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
   };

   return (
      <div className={style.search}>
         <input 
            type='search' 
            placeholder="Busqueda"
            onChange={handleChange}
            value = {id}
         />
         <button className={style.boton} onClick={() => onSearch (id)}>Agregar</button>
      </div>
   );
}
