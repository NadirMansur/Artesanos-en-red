export const email = {
  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "ejemplo@ej.com tu@ejemplo.com",
};

export const tel = {
  regex: /^223\d{7}$/,
  message: "El numero de telefono debe comenzar con 223, ej: 2235",
};

export const intro = {
  maxLength: 570,
  validate: (value) => value.trim() !== "" && value.length <= intro.maxLength,
  message: `La introducción no debe estar vacía y no debe superar los ${intro.maxLength} caracteres.`,
};

export const signUpPasswordRepeat = {
  validate: (value, signUpPassword) => signUpPassword !== value,
  message: "Las contraseñas deben ser iguales",
};
