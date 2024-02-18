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
  changeFilterAbc,
  filterAbc,
}) {
  const handleSubmit = (event) => {
    event.preventDefault;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
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
      </div>
    </form>
  );
}

export default Filters;
