import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6)
    .matches(/[0-9]/, "Password must include a number")
    .required("Password is required"),
});

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
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
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
            {errors.email && touched.email && (
              <div className={s.error}>{errors.email}</div>
            )}

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
            {errors.password && touched.password && (
              <div className={s.error}>{errors.password}</div>
            )}

            <button className={s.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
