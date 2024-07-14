import "./Form.css";
import SiteText from "../checkBoxes/SiteText";
import SiteOptions from "../checkBoxes/SiteOptions";
import Button from "../buttons/Button";
import { useState } from "react";
//Formulario donde se agregan las opciones
function Form({ changeWatch, updateVideo, id, videos }) {
  const [tittle, setTittle] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const sendControl = (e) => {
    e.preventDefault();
    let sendDates = {
      id: id,
      tittle,
      image,
      video,
      description,
      category,
    };
    updateVideo(videos, sendDates, id);
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
    <section className="mod__card">
      <form className="mod__form" onSubmit={sendControl}>
        <button
          className="mod__bdelete"
          onClick={() => {
            changeWatch();
          }}
        >
          ×
        </button>
        <h1>EDITAR CARD:</h1>
        <SiteText
          className="mod__site"
          name="Título"
          placeholder="¿qué es javascript?"
          value={tittle}
          setValue={setTittle}
        />
        <SiteOptions
          classNamee="mod__options"
          value={category}
          setValue={setCategory}
        />
        <SiteText
          className="mod__site"
          name="Imagen"
          placeholder="https://www.google.com/url?sa=i&url"
          value={image}
          setValue={setImage}
          type="url"
        />
        <SiteText
          className="mod__site"
          name="Video"
          placeholder="https://www.youtube.com/url?sa=i&url"
          value={video}
          setValue={setVideo}
          type="url"
        />
        <SiteText
          className="mod__site"
          name="Descripción"
          placeholder="Digite maximo 400 palabras"
          value={description}
          setValue={setDescription}
        />
        <div className="mod__baction">
          <Button classButton="mod__button" type={"submit"}>
            Guardar
          </Button>
          <button className="mod__button" onClick={clearForm}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}
export default Form;
