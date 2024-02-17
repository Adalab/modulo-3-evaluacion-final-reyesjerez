function FilterHouse() {
  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="house">
        {" "}
        Elija su casa fav:
      </label>
      <select name="house" id="houe">
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </fieldset>
  );
}

export default FilterHouse;
