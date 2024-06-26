export const email = {
  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "ejemplo@ej.com tu@ejemplo.com",
};

export const tel = {
  regex: /^(223|232)\d{7}$/,
  message:
    "El número de teléfono debe comenzar con 223 o 232, por ejemplo: 2235 o 2323",
};

export const marca = {
  message: "El nombre de la marca no puede estar vacio",
};

const introMaxLength = 570;

export const intro = {
  maxLength: introMaxLength,
  validate: (value) => value.trim() !== "" && value.length <= introMaxLength,
  message: `La introducción no debe estar vacía y no debe superar los ${introMaxLength} caracteres.`,
};

export const signUpPasswordRepeat = {
  validate: (value, signUpPassword) => signUpPassword !== value,
  message: "Las contraseñas deben ser iguales",
};

const titleMaxLength = 17;
export const title = {
  maxLength: titleMaxLength,
  validate: (value) => value.trim() !== "" && value.length <= titleMaxLength,
  message: `El titulo no debe estar vacío y no debe superar los ${titleMaxLength} caracteres.`,
};

export const tag = {
  regex: /^#.{0,9}$/,
  message:
    "El Tag debe comenzar con '#' y ser una palabra clave del producto de max 9 caractéres",
};
const descriptionMaxLength = 96;
export const description = {
  maxLength: descriptionMaxLength,
  validate: (value) =>
    value.trim() !== "" && value.length <= descriptionMaxLength,
  message: `La descripción del Producto debe tener un maximo de ${descriptionMaxLength} caracteres.`,
};
