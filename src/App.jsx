import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "@components/ContactList/ContactList";
import SearchBox from "@components/SearchBox/SearchBox";
import ContactForm from "@components/ContactForm/ContactForm";
import "./App.css";

const CONTACTS_CACHE_KEY = 'contacts_cache';

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem(CONTACTS_CACHE_KEY);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_CACHE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleSubmitContact = (values, actions) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: uuidv4() },
    ]);
    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submitHandler={handleSubmitContact} />
      <SearchBox
        searchRequest={searchRequest}
        handleChange={handleSearchRequest}
      />
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleDeleteContact}
      />
    </div>
  );
};

export default App;
