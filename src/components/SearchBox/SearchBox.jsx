import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { filterChange, searchFocus } from "../../redux/filter/slice";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);
  const isFocused = useSelector((state) => state.filter.isFocused);
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Search contact
      </label>
      <div className={s.fieldBox}>
        {!isFocused && <BsSearch className={s.icon} size={25} />}
        <input
          className={s.input}
          type="text"
          name="search"
          value={filter || ""}
          onChange={(e) => dispatch(filterChange(e.target.value))}
          onFocus={() => dispatch(searchFocus(true))}
          onBlur={() => dispatch(searchFocus(false))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
