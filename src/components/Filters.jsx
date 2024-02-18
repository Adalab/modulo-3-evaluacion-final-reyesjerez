import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";

function Filters({
  changeFilterName,
  filterName,
  changeFilterHouse,
  filterHouse,
  changeFilterGender,
  filterGender,
  resetFilters,
}) {
  const handleSubmit = (event) => {
    event.preventDefault;
  };
  const handleInput = (event) => {
    resetFilters();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <FilterName
          changeFilterName={changeFilterName}
          filterName={filterName}
        ></FilterName>
        <FilterHouse
          changeFilterHouse={changeFilterHouse}
          filterHouse={filterHouse}
        ></FilterHouse>
        <FilterGender
          changeFilterGender={changeFilterGender}
          filterGender={filterGender}
        ></FilterGender>
        <button className="button__reset" onClick={handleInput}>
          Borrar filtros
        </button>
      </div>
    </form>
  );
}

export default Filters;
