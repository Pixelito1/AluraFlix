import "./SiteTextOptions.css";
import "./VideoTextCategories.css";
import { ValueCards } from "../cards/ValueCards";
//Formulario pero las opciones
function SiteOptions({ classNamee, value, setValue }) {
  const updateValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={classNamee}>
      <label>Categoría</label>
      <select value={value} onChange={updateValue}>
        <option value="" disabled defaultValue="" hidden>
          escoja una categoria{" "}
        </option>
        {ValueCards.map((category, index) => {
          return (
            <option key={index} value={category.tittle}>
              {category.tittle}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SiteOptions;
