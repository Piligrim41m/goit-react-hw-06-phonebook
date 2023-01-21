import { nanoid } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts-slice';
import css from './ContactForm.module.css';

function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
  const handleChange = event => {
    const { name, value } = event.target
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };
  
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
    
  const reset = () => {
    setName('');
    setNumber('')
    };
    
  const handleSubmit = event => {
    event.preventDefault();
    const newElement = { id: nanoid(), name, number };
    contacts.some(contact => contact.name === name)
    ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
      )
      : dispatch(addContact(newElement))
    
    reset();
    };
    
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

export default ContactForm