import React, { useState } from "react";
import img from '../img/upload-folder.png';
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
          <img src={img} alt="" className={style.img} />
          <div className={style.contenedorFile}> 
          <input
          type="file"
          className={style.fileInput} // Clase CSS personalizada para el input
          onChange={handleFileChange}
        />
        
        </div>
        </div>
        
       
      
    </div>
  );
}

export default FileUploader;
