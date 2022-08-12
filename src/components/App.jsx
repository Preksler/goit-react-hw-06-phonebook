import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";

export function App() {

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter title="Find contacts by name" />
      <ContactList />
    </Container>
  )
}
