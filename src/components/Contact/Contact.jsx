import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { IoIosCall, IoMdPerson } from 'react-icons/io';

export function Contact({ name, number, deleteAction }) {
  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.contactField}>
          <IoMdPerson />
          &nbsp;{name}
        </div>
        <div className={css.contactField}>
          <IoIosCall />
          &nbsp;{number}
        </div>
      </div>
      <button type="button" className={css.button} onClick={deleteAction}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired
};
