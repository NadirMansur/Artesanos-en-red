import axios from "axios";
import React, { useState } from "react";
import rubro from "./createRubro.module.css";

const CreateRubro = () => {
  
  const endpoint = import.meta.env.VITE_GET_RUBROS_ENDPOINT;
  

  const [rubroValue, setRubro] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(endpoint, {
        rubro: rubroValue,
      });
     // console.log(response.data);
      setRubro("");
    } catch (error) {
      console.error("Hubo un error al crear el Rubro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={rubro["form"]}>
      <label className={rubro["label"]}>
        <p>Rubro:</p>
      <input
          type='text'
          value={rubroValue}
          onChange={(event) => setRubro(event.target.value)}
          className={rubro["input"]}
        />
      </label>
      <button type='submit' className={rubro["button"]}>
        Crear Rubro
      </button>
    </form>
  );
};

export default CreateRubro;
  