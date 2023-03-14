// import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
    return (
      <ul>
        {contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
      </ul>
    );
};