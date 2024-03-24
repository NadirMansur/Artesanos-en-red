import { setFormErrorsArtesano } from "../store/ducks/errorsDuck";
import { email, tel, intro, signUpPasswordRepeat } from "./regex";

export const validate = (e, signUpPassword, dispatch, formErrorsArt) => {
    const { name, value } = e.target;
    let isValid = true;
    let error = "";
    if (name === "email") {
      isValid = email.regex.test(value);
      error = isValid ? "" : email.message;
    } else if (name === "tel") {
      isValid = tel.regex.test(value);
      error = isValid ? "" : tel.message;
    } else if (name === "intro") {
      isValid = intro.validate(value);
      error = isValid ? "" : intro.message;
    } else if (name === "passwordRepeat") {
      isValid = signUpPasswordRepeat.validate(value, signUpPassword);
      error = !isValid ? "" : signUpPasswordRepeat.message;
    }
    dispatch(
      setFormErrorsArtesano({
        ...formErrorsArt,
        [name]: error,
      })
    );
  };
