import { Contact } from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const nameFilter = useSelector((state) => state.filters.name);
  const contacts = useSelector((state) => state.contacts.items).filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  return (
    <section>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
}
