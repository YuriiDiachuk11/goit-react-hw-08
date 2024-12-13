import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(openModal(id));
  };
  const handleEditClick = () => {
    const newName = prompt("Enter new name:", name);
    const newNumber = prompt("Enter new number:", number);
    if (newName && newNumber) {
      dispatch(editContact({ id, name: newName, number: newNumber }));
    }
  };

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
      <button className={s.button} type="button" onClick={handleEditClick}>
        Edit
      </button>
      <button className={s.button} onClick={handleDeleteClick} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
