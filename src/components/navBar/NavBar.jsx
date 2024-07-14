import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "../buttons/Button";

function NavBar() {
  return (
    <section className="mod__navbar">
      <img src="/img/AluraFlix.png" alt="AluraFlix" />
      <div>
        <Link to="/">
          <Button classButton="mod__buttonsnavbar">Home</Button>
        </Link>
        <Link to="/nuevo-video">
          <Button classButton="mod__buttonsnavbar">Nuevo Video</Button>
        </Link>
      </div>
    </section>
  );
}

export default NavBar;
