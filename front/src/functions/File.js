const handleFileChange = (event) => {
  const file = event.target.files[0];
  //console.log(file);
  if (!file) {
    setErrors({
      ...errors,
      img: "Debes subir una imagen para continuar",
    });
  } else {
    setSelectedFile(file);
    generateThumbnail(file);
    setErrors({
      ...errors,
      img: "",
    });
  }
};

const generateThumbnail = (file) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    setThumbnail(e.target.result);
  };

  reader.readAsDataURL(file);
};

export { handleFileChange, generateThumbnail };
