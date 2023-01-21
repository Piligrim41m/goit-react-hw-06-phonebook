import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contacts-slice';
import Contact from '../contacts/Contact';
import css from './ContactList.module.css';


function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));
  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContactList = filtredContacts();
  
   return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;