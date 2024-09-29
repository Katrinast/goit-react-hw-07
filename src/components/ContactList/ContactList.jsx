import css from './ContactList.module.css'

import Contact from "../Contact/Contact";

import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactList() {
  
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.filter.toLowerCase());

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter)
);
  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
<Contact data={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  )

}