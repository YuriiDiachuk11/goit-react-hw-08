import { useDispatch, useSelector } from "react-redux";
import s from "./Modal.module.css";
import { closeModal } from "../../redux/modal/slice";
import { deleteContact } from "../../redux/contacts/operations";

const Modal = () => {
  const dispatch = useDispatch();
  const { IsOpen, contactToDelete } = useSelector((state) => state.modal);
  const handleConfirm = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete))
        .unwrap()
        .then(() => {
          console.log("Contact deleted successfully");
        })
        .catch((error) => {
          console.error("Failed to delete contact:", error);
        });
      dispatch(closeModal());
    }
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  if (!IsOpen) return null;
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h3>Are you sure ?</h3>
        <div className={s.buttonBox}>
          <button onClick={handleConfirm} className={s.confirm}>
            Yes
          </button>
          <button onClick={handleCancel} className={s.cancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
