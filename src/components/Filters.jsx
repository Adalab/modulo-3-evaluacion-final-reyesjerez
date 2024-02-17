import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters() {
  return (
    <form className="form">
      <FilterName></FilterName>
      <FilterHouse></FilterHouse>
    </form>
  );
}

export default Filters;
