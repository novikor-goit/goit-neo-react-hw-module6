import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <section className={css.container}>
      <p>Filter contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </section>
  );
}
