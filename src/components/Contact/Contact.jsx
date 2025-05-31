import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { IoIosCall, IoMdPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';

export function Contact({ name, number, id }) {
  const dispatch = useDispatch();

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
      <button type="button" className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
