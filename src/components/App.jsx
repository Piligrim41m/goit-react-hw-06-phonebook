import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Message from './message/Message';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';

export function App() {
  const contacts =useSelector(getContacts)

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
      </h1>
      <ContactForm/>

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter/>
      {contacts.length > 0 ? ( <ContactList/> )
      : ( <Message text="Contact list is empty." />)
      }
    </div> 
  )
}

