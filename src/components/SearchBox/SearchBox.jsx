import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filters/slice'

export default function SearchBox() {
  const dispatch = useDispatch();
  
  const onSearch = (value) => {
    dispatch(changeFilter(value));
  }

  return (
    <div className={css.container}>
      <label htmlFor="search">Find contcts by name</label>
      <input
        className={css.input}
        type="text"
        id="search"
        onChange={(evt) => onSearch(evt.target.value)}
      />
    </div>
  );
}
