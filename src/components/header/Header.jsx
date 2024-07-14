import { useEffect, useState } from "react";
import { ValueCards } from "../cards/ValueCards";
import "./Header.css";

function Header({ filterHeader, idHeader }) {
  const [data, setData] = useState(null);
  const [color, setColor] = useState("");

  useEffect(() => {
    const videoData = filterHeader();
    if (videoData) {
      setData(videoData);
      const valueCard = ValueCards.find(
        (card) => card.tittle === videoData.category
      );
      if (valueCard) {
        setColor(valueCard.color);
      }
    }
  }, [idHeader]);

  return (
    <>
      {data && (
        <header className="mod__head">
          <img className="a" src={data.image} alt="org" />
          <div className="mod__headoverlay"></div>
          <div className="mod__photo">
            <div className="mod__headtext">
              <h1 style={{ backgroundColor: color }}>{data.category}</h1>
              <h2>{data.tittle}</h2>
              <p>{data.description}</p>
            </div>
            <img
              className="b"
              style={{
                border: `4px solid ${color}`,
                boxShadow: `0 0 20px 5px ${color}`,
              }}
              src={data.image}
              alt="org"
            />
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
