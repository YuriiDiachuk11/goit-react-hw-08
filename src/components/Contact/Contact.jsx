import s from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";
import { editContact } from "../../redux/contacts/operations";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

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
          <IoIosContact className={s.icon} size="20" color="black" />
          {name}
        </span>
        <span className={s.number}>
          <BsTelephone className={s.icon} size="20" color="black" />
          {number}
        </span>
      </div>
      <div className={s.buttonBox}>
        <IconButton edge="end" onClick={handleEditClick}>
          <Edit />
        </IconButton>
        <IconButton edge="end" onClick={handleDeleteClick} color="error">
          <Delete />
        </IconButton>
      </div>
    </li>
  );
};

export default Contact;
