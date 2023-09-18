import { useState } from "react";
import { useSetProduct } from "../../Providers/ProductsProvider";
import SelectedComponent from "../../common/select/SelectedComponent";
import SearchBar from "../../common/search/SearchBar";
import Select from "react-select";
import styles from "./Filter.module.css";
const filterOptions = [
  { value: "All", label: "All" },
  { value: "XXL", label: "XXL" },
  { value: "XL", label: "XL" },
  { value: "L", label: "L" },
  { value: "M", label: "M" },
  { value: "S", label: "S" },
  { value: "XS", label: "XS" },
];
const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];
const Filter = () => {
  const dispatch = useSetProduct();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const sortHanlder = (SelectedOption) => {
    dispatch({ type: "sort", SelectedOption });
    setSort(SelectedOption);
  };
  const FilterHandler = (SelectedOption) => {
    dispatch({ type: "Filter", SelectedOption });
    dispatch({ type: "sort", SelectedOption: sort });
    setFilter(SelectedOption);
  };
  return (
    <section>
      <SearchBar filter={filter}  sort = {sort}/>
      <div className={styles.filter}>
        <p>Filter Products Based On :</p>

        <SelectedComponent
          title="order by"
          value={filter}
          onChange={FilterHandler}
          options={filterOptions}
        />

        <SelectedComponent
          title="sort by"
          value={sort}
          onChange={sortHanlder}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
