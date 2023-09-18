import { useState } from "react";
import { useSetProduct } from "../../Providers/ProductsProvider";
import styles from "./SearchBar.module.css";

const SearchBar = ({ filter , sort }) => {
  const dispatch = useSetProduct();
  const [value, setValue] = useState();
  const changeHandler = (e) => {
    dispatch({ type: "Filter", SelectedOption: filter});
    dispatch({ type: "sort", SelectedOption: sort });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search For..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
