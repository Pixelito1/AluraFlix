import "./AddVideo.css";
import SiteText from "../checkBoxes/SiteText";
import SiteOptions from "../checkBoxes/SiteOptions";
import Button from "../buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddVideo({ registerVideo }) {
  const [tittle, setTittle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const sendControl = (e) => {
    e.preventDefault();
    if (tittle && image && video && description && category) {
      let sendDates = {
        id: crypto.randomUUID(),
        tittle,
        image,
        video,
        description,
        category,
      };
      registerVideo(sendDates);
      navigate("/");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  const clearForm = (e) => {
    e.preventDefault();
    setTittle("");
    setImage("");
    setVideo("");
    setDescription("");
    setCategory("");
  };

  return (
    <section className="mod__addvideo">
      <form className="mod__divideo" onSubmit={sendControl}>
        <h1>NUEVO VIDEO</h1>
        <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
        <p>Crear Tarjeta</p>
        <div className="mod__addvideotext">
          <SiteText
            className="mod__videotext"
            name="Título"
            placeholder="¿qué es javascript?"
            value={tittle}
            setValue={setTittle}
          />
          <SiteOptions
            classNamee="mod__videocategories"
            value={category}
            setValue={setCategory}
          />
          <SiteText
            className="mod__videotext"
            name="Imagen"
            placeholder="https://www.google.com/url?sa=i&url"
            value={image}
            setValue={setImage}
            type="url"
          />
          <SiteText
            className="mod__videotext"
            name="Video"
            placeholder="https://www.youtube.com/url?sa=i&url"
            value={video}
            setValue={setVideo}
            type="url"
          />
          <SiteText
            className="mod__videotext"
            name="Descripción"
            placeholder="Digite maximo 400 palabras"
            value={description}
            setValue={setDescription}
          />
        </div>
        <div className="mod__addbutt">
          <Button classButton="mod__addbutton" type="submit">
            Guardar
          </Button>
          <button className="mod__addbutton" onClick={clearForm}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddVideo;
