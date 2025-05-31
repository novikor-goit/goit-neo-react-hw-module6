import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

export default function SearchBox({ searchTerm, onSearch }) {
  return (
    <section className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className={css.input}
      />
    </section>
  );
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};
