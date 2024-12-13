import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  return (
    <div>
      <div className="contactsPageBox">
        <div className="contactFormBox">
          <ContactForm />
        </div>
        <div className="contactListBox">
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
