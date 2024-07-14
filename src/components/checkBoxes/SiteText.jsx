import "./SiteTextOptions.css";
import "./VideoTextCategories.css";
//Formulario pero el texto
function SiteText({
  placeholder,
  name,
  className,
  value,
  setValue,
  type = "text",
}) {
  const placeholderMod = `${placeholder}...`;

  const updateCategory = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={className}>
      <label>{name}</label>
      <input
        placeholder={placeholderMod}
        required
        value={value}
        onChange={updateCategory}
        type={type}
      />
    </div>
  );
}

export default SiteText;
