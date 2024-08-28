import css from "./ContactList.module.css";
import Contact from "@components/Contact/Contact.jsx";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              phoneNumber={number}
              id={id}
              handleDelete={handleDelete}
            />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
