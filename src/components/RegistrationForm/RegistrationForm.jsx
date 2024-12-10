import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Sorry, missing");
      });
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Create an Account</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field
            className={s.input}
            id="name"
            name="name"
            placeholder="Enter name"
          />
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            className={s.input}
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <Field
            id="password"
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter pass"
          />
          <button className={s.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
