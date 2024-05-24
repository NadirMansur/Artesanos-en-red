import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRubro } from "../../store/ducks/rubroDuck";
import styles from "./selectRubro.module.css";

const SelectRubro = () => {
  const dispatch = useDispatch();

  const [rubros, setRubros] = useState([]);
  const endpoint = import.meta.env.VITE_GET_RUBROS_ENDPOINT;
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchRubros = async () => {
      try {
        const response = await axios.get(endpoint);
        setRubros(response.data);
      } catch (error) {
        console.error("Hubo un error al obtener los rubros:", error);
      }
    };
    fetchRubros();
    // eslint-disable-next-line
  }, []);


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(
      setRubro(event.target.value)
    );
  };

  return (
    <select className={styles.select} value={selectedOption} onChange={handleSelectChange}>
      {rubros.map((rubro, index) => (
        <option key={index} value={rubro.name} className={styles.option}>
          {rubro.name}
        </option>
      ))}
    </select>
  );
};

export default SelectRubro;
