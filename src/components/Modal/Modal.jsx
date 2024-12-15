import { useDispatch, useSelector } from "react-redux";
import s from "./Modal.module.css";

import { deleteContact, editContact } from "../../redux/contacts/operations";
import { closeModal, updateContactToEdit } from "../../redux/contacts/slice";

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, contactToDelete, contactToEdit } = useSelector(
    (state) => state.contacts.modal
  );

  const handleConfirmDelete = () => {
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

  const handleConfirmEdit = () => {
    if (contactToEdit && contactToEdit.name && contactToEdit.number) {
      dispatch(editContact(contactToEdit))
        .unwrap()
        .then(() => {
          console.log("Contact updated successfully");
        })
        .catch((error) => {
          console.error("Failed to update contact:", error);
        });
      dispatch(closeModal());
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactToEdit({ [name]: value }));
  };

  if (!isOpen) return null;
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        {contactToEdit ? (
          <>
            <h3>Edit Contact</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={contactToEdit.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="number">Number:</label>
              <input
                id="number"
                type="tel"
                name="number"
                value={contactToEdit.number}
                onChange={handleInputChange}
                required
              />
              <div className={s.buttonBox}>
                <button onClick={handleConfirmEdit} className={s.confirm}>
                  Save
                </button>
                <button onClick={handleCancel} className={s.cancel}>
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <h3>Are you sure you want to delete this contact?</h3>
            <div className={s.buttonBox}>
              <button onClick={handleConfirmDelete} className={s.confirm}>
                Yes
              </button>
              <button onClick={handleCancel} className={s.cancel}>
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
