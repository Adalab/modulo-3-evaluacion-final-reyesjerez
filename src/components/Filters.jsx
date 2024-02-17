import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({
  changeFilterName,
  filterName,
  changeFilterHouse,
  filterHouse,
}) {
  const handleSubmit = (event) => {
    event.preventDefault;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterName
        changeFilterName={changeFilterName}
        filterName={filterName}
      ></FilterName>
      <FilterHouse
        changeFilterHouse={changeFilterHouse}
        filterHouse={filterHouse}
      ></FilterHouse>
    </form>
  );
}

export default Filters;
