import React, { useState } from "react";
import img from '../img/cloud.png';
import style from '../css/FileUpload.module.css'

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Aquí puedes agregar la lógica para guardar el archivo en tu backend
    if (selectedFile) {
      console.log("Subiendo archivo:", selectedFile);
      // Realiza la llamada a tu API para guardar el archivo
    } else {
      console.log("No se ha seleccionado ningún archivo.");
    }
  };

  return (
    <div>
        <div className={style.divimg}>
        <img src={img} alt="" className={style.img}/>
        </div>
        
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir archivo</button>
    </div>
  );
}

export default FileUploader;
