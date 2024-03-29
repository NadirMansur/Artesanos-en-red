import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setArtLogin } from "../../../../store/ducks/artDuck";
import { useDispatch } from "react-redux";
import sing from "../singUpForm.module.css";

const SingInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const endpoint = import.meta.env.VITE_LOGIN_ART;

  const [signInData, setSignInData] = useState({
    singInUsername: "",
    signInPassword: "",
  });
  const [responseAPI, setResponseAPI] = useState({
    status: null,
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSignInChange = (e) => {
    setFormSubmitted(false);
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      //////////////////////logica de envio de formulario///////////////////////
      setFormSubmitted(true);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      });
      console.log("response", response);
      if (response.ok) {
        const { status, message, art } = await response.json();
        console.log("status", status, "message", message, "art", art);
        setResponseAPI({
          status: status,
          message: message,
          art: art,
        });

        if (status) {
          dispatch(setArtLogin(art));
          navigate("/homeart", { state: { art: art } });
        }
      } else {
        console.error("Error al iniciar secion");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    //////////////////////logica de envio de formulario///////////////////////
  };
  return (
    <div className={sing["container"]}>
      <h2 className={sing["h2"]}>Ingresar como Emprendedor</h2>
      <form onSubmit={handleSignInSubmit} className={sing["form"]}>
        <input
          className={sing["input"]}
          type='text'
          name='singInUsername'
          placeholder='Nombre'
          value={signInData.singInUsername}
          onChange={handleSignInChange}
          required
        />
        <input
          className={sing["input"]}
          type='password'
          name='signInPassword'
          placeholder='Password'
          value={signInData.signInPassword}
          onChange={handleSignInChange}
          required
        />
        {!responseAPI.status && formSubmitted ? (
          <span className={sing["span-alert"]}>{responseAPI.message}</span>
        ) : null}
        <button
          className={sing["button"]}
          type='submit'
          disabled={formSubmitted}
        >
          {formSubmitted ? "Enviando..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SingInForm;
