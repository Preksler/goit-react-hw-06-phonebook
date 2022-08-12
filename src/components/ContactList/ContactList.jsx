import { useSelector } from "react-redux";
import ContactElement from './ContactElement/ContactElement';
import css from "./ContactList.module.css"

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul className={css.list}>
            {filteredContacts.map(({ id, name, number }) => {
                return (
                    <ContactElement 
                        contactItem={{ id, name, number }}
                        key={id}
                    />
                )
            })}
        </ul>
    )
}

export default ContactList;