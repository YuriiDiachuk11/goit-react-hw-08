import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameId} />

          <label className={s.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={s.input} type="tel" name="number" id={numberId} />

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
