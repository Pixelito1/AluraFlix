import Card from "./Card";
import "./SectionsCards.css";
//Aqui esta las  categorias de las cards y  el llamado a las cards una por una
function SectionCards({
  data,
  videos,
  changeWatch,
  deleteVideo,
  updateVideo,
  setId,
  setIdHeader,
}) {
  return (
    videos.length > 0 && (
      <section className="mod__spacecard">
        <h1 style={{ backgroundColor: data.color }}>{data.tittle}</h1>
        <div className="mod__cardcontainer">
          {videos?.map((video, index) => (
            <Card
              data={data}
              video={video}
              key={index}
              changeWatch={changeWatch}
              deleteVideo={deleteVideo}
              updateVideo={updateVideo}
              setId={setId}
              setIdHeader={setIdHeader}
            />
          ))}
        </div>
      </section>
    )
  );
}

export default SectionCards;
