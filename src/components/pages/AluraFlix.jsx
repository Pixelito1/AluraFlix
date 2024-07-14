import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Header from "../header/Header";
import Form from "../form/Form";
import SectionCards from "../cards/SectionsCards";
import AddVideo from "../addVideo/AddVideo";
import Footer from "../footer/Footer";
import { ValueCards } from "../cards/ValueCards";
import { VideosCards } from "../cards/ValueCards";

function AluraFlix() {
  const [edit, setEdit] = useState(false);
  const [videos, setVideos] = useState(VideosCards);
  const [id, setId] = useState(null);
  const [idHeader, setIdHeader] = useState("1");

  const changeWatch = () => {
    setEdit(!edit);
  };

  const registerVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (id) => {
    const newVideosDeleted = videos.filter((video) => video.id !== id);
    setVideos(newVideosDeleted);
  };

  const filterHeader = () => {
    return videos.find((video) => video.id.includes(idHeader));
  };

  const updateVideo = (videos, newVideos, id) => {
    if (id) {
      const replacement = videos.map((video) => {
        if (video.id === id) {
          return newVideos;
        } else {
          return video;
        }
      });
      setVideos(replacement);
    }
    setEdit(null);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header filterHeader={filterHeader} idHeader={idHeader} />
                {ValueCards.map((value) => (
                  <SectionCards
                    data={value}
                    key={value.tittle}
                    videos={videos.filter(
                      (video) => video.category === value.tittle
                    )}
                    changeWatch={changeWatch}
                    deleteVideo={deleteVideo}
                    updateVideo={updateVideo}
                    setId={setId}
                    setIdHeader={setIdHeader}
                  />
                ))}
                {edit && (
                  <Form
                    changeWatch={changeWatch}
                    updateVideo={updateVideo}
                    videos={videos}
                    id={id}
                  />
                )}
              </>
            }
          />
          <Route
            path="/nuevo-video"
            element={<AddVideo registerVideo={registerVideo} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AluraFlix;
