import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsOps";

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

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Name is required"),
    number: Yup.string().min(3).required("Number is required"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={s.error} name="name" />
          <label className={s.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={s.input} type="tel" name="number" id={numberId} />
          <ErrorMessage className={s.error} name="number" />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
