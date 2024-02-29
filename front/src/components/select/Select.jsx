import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./selectRubro.module.css";

const SelectRubro = (props) => {
  // const { art } = props;
  const [rubros, setRubros] = useState([]);
  const endpoint = import.meta.env.VITE_GET_RUBROS_ENDPOINT;
  useEffect(() => {
    const fetchRubros = async () => {
      try {
        const response = await axios.get(endpoint);
        setRubros(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("Hubo un error al obtener los rubros:", error);
      }
    };

    fetchRubros();
  }, []);

  return (
    <select className={styles.select}>
      {rubros.map((rubro, index) => (
        <option key={index} value={rubro.id} className={styles.option}>
          {rubro.name}
        </option>
      ))}
    </select>
  );
};

export default SelectRubro;
