import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import s from "./ContactsPage.module.css";

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
      <div className={s.contactsBox}>
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
