import PropTypes from "prop-types";

function FilterHouse({ changeFilterHouse, filterHouse }) {
  const handleInput = (event) => {
    changeFilterHouse(event.currentTarget.value);
  };

  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="house">
        Elija su casa favorita:
      </label>
      <select
        name="house"
        id="house"
        onChange={handleInput}
        value={filterHouse}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
        <option value="all">Todos</option>
      </select>
    </fieldset>
  );
}

FilterHouse.propTypes = {
  changeFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,
};

export default FilterHouse;
