import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete: deleteAction }) {
  return (
    <section>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} deleteAction={() => deleteAction(id)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};
