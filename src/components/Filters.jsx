import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({ changeFilterName, filterName }) {
  const handleSubmit = (event) => {
    event.preventDefault;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterName
        changeFilterName={changeFilterName}
        filterName={filterName}
      ></FilterName>
      <FilterHouse></FilterHouse>
    </form>
  );
}

export default Filters;
