import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { filterChange } from "../../redux/filter/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        name="search"
        value={filter || ""}
        onChange={(e) => dispatch(filterChange(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
