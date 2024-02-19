import PropTypes from "prop-types";

function FilterGender({ changeFilterGender, filterGender }) {
  const handleInput = (event) => {
    changeFilterGender(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="abc">
        Filtra por género:{" "}
      </label>
      <label className="form__label" htmlFor="abc">
        Todos{" "}
      </label>
      <input
        name="gender"
        id=""
        type="radio"
        onChange={handleInput}
        value=""
        checked={filterGender === ""}
      ></input>
      <label className="form__label" htmlFor="abc">
        Masculino
      </label>
      <input
        name="gender"
        id="male"
        type="radio"
        onChange={handleInput}
        value="male"
        checked={filterGender === "male"}
      ></input>
      <label className="form__label" htmlFor="abc">
        Femenino{" "}
      </label>
      <input
        name="gender"
        id="female"
        type="radio"
        onChange={handleInput}
        value="female"
        checked={filterGender === "female"}
      ></input>
    </fieldset>
  );
}

FilterGender.propTypes = {
  changeFilterGender: PropTypes.func.isRequired,
  filterGender: PropTypes.string.isRequired,
};

export default FilterGender;
