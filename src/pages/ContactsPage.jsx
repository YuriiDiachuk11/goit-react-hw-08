import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);
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
