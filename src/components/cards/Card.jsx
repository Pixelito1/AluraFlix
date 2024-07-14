import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Button from "../buttons/Button";
import "./Card.css";
//Aqui se crea la card  individualmente
function Card({ video, changeWatch, deleteVideo, setId, setIdHeader, data }) {
  return (
    <section
      style={{
        border: `4px solid ${data.color}`,
        boxShadow: `0 0 4px 2px ${data.color}`,
      }}
      className="mod__cards"
    >
      <img src={video.image} onClick={() => setIdHeader(video.id)} />
      <div className="mod__divcardbutton">
        <div className="mod__divbuttonimg">
          <MdDeleteForever color="white" size={30} />
          <Button
            classButton="mod__cardsbutton"
            change={() => {
              deleteVideo(video.id);
            }}
          >
            Borrar
          </Button>
        </div>
        <div className="mod__divbuttonimg">
          <CiEdit color="white" size={30} />
          <Button
            classButton="mod__cardsbutton"
            change={() => {
              changeWatch();
              setId(video.id);
            }}
          >
            Editar
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Card;
