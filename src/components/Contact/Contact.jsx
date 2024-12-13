import s from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openEditModal, openModal } from "../../redux/modal/slice";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(openModal(id));
  };
  const handleEditClick = () => {
    dispatch(openEditModal({ id, name, number }));
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
