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

export default FilterName;
