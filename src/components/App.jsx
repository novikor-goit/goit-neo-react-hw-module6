import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

const App = () => {
  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      {/*<SearchBox searchTerm={searchTerm} onSearch={setSearchTerm} />*/}
      <ContactList />
    </main>
  );
};

export default App;
