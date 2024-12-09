import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
