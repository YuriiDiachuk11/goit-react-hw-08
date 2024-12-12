import s from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h3>Are you sure ?</h3>
        <div className={s.buttonBox}>
          <button onClick={} className={s.confirm}>
            Yes
          </button>
          <button onClick={} className={s.cancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
