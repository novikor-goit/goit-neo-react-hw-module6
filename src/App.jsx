import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Contacts from './ResourceModel/Contacts.js';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      Contacts.load() || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
      ]
  );

  const [searchTerm, setSearchTerm] = useState('');
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => Contacts.save(contacts), [contacts]);

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {contacts.length > 0 ? (
        <>
          <SearchBox searchTerm={searchTerm} onSearch={setSearchTerm} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </>
      ) : (
        <span>No contacts yet</span>
      )}
    </main>
  );
};

export default App;
