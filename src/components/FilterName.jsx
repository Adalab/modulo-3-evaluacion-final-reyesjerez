function FilterName() {
  return (
    <fieldset className="form__fieldset">
      <label className="form__label" htmlFor="character">
        Escribe un personaje:
      </label>
      <input type="text" id="character" placeholder="Buscar personaje" />
    </fieldset>
  );
}

export default FilterName;
