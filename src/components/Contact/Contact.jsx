import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.info}>
        <span className={s.name}>
          <IoMdContact className={s.icon} size="14" color="black" />
          {name}
        </span>
        <span className={s.number}>
          <BsFillTelephoneFill className={s.icon} size="14" color="black" />
          {number}
        </span>
      </div>
      <button
        className={s.button}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
