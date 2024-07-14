import "./ButtonForm.css";
import "./ButtonsNavBar.css";
import "./ButtonsCards.css";
import "./ButtonAdd.css";
//Botones de la Pagina
function Button({ classButton, children, change, type }) {
  return (
    <button
      type={type ? type : "button"}
      className={classButton}
      onClick={() => change && change()}
    >
      {children}
    </button>
  );
}
export default Button;
