import { setFormErrorsProducto } from "../store/ducks/errorsDuck";
import { title, description, tag } from "./regex";

export const validate = (e, dispatch, formErrorsProd) => {
  const { name, value } = e.target;
  let isValid = true;
  let error = "";
  if (name === "title") {
    isValid = title.validate(value);
    error = isValid ? "" : title.message;
  } else if (name === "description") {
    isValid = description.validate(value);
    error = isValid ? "" : description.message;
  } else if (
    name === "tag1" ||
    name === "tag2" ||
    name === "tag3" ||
    name === "tag4"
  ) {
    isValid = tag.regex.test(value);
    error = isValid ? "" : tag.message;
  }
  dispatch(
    setFormErrorsProducto({
      ...formErrorsProd,
      [name]: error,
    })
  );
};
