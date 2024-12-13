import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { filterChange } from "../../redux/filter/slice";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Search contact
      </label>
      <div className={s.fieldBox}>
        <BsSearch className={s.icon} size={25} />
        <input
          className={s.input}
          type="text"
          name="search"
          value={filter || ""}
          onChange={(e) => dispatch(filterChange(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
