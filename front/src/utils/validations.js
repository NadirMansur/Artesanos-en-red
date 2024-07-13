import { setFormErrorsArtesano } from "../store/ducks/errorsDuck";
import { email, intro, marca, signUpPasswordRepeat, tel } from "./regex";

export const validate = (e, signUpPassword, dispatch, formErrorsArt) => {
  // console.log("entre a validate!");
  const { name, value } = e.target;
  let isValid = true;
  let error = "";
  if (name === "email") {
    // console.log("entre a email!");
    isValid = email.regex.test(value);
    error = isValid ? "" : email.message;
  } else if (name === "tel") {
    // console.log("entre a tel!");
    isValid = tel.regex.test(value);
    error = isValid ? "" : tel.message;
  } else if (name === "intro") {
    isValid = intro.validate(value);
    error = isValid ? "" : intro.message;
  } else if (name === "passwordRepeat") {
    isValid = signUpPasswordRepeat.validate(value, signUpPassword);
    error = !isValid ? "" : signUpPasswordRepeat.message;
  } else if (name === "username") {
    // console.log("entre a marca!");
    isValid = value !== "";
    error = isValid ? "" : marca.message;
  }
  dispatch(
    setFormErrorsArtesano({
      ...formErrorsArt,
      [name]: error,
    })
  );
};
