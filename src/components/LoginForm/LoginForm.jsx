import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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
            className={s.input}
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <button className={s.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
