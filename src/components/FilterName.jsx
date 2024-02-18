import PropTypes from "prop-types";

function FilterName({ changeFilterName, filterName }) {
  const handleInput = (event) => {
    changeFilterName(event.currentTarget.value);
  };

  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="character">
        Escribe un personaje:
      </label>
      <input
        type="text"
        id="character"
        placeholder="Buscar personaje"
        onInput={handleInput}
        value={filterName}
      />
    </fieldset>
  );
}

FilterName.propTypes = {
  changeFilterName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterName;
