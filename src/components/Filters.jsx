import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({ changeFilterName, filterName }) {
  return (
    <form className="form">
      <FilterName
        changeFilterName={changeFilterName}
        filterName={filterName}
      ></FilterName>
      <FilterHouse></FilterHouse>
    </form>
  );
}

export default Filters;
