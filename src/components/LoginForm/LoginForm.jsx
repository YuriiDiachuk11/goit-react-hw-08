import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import { clearError, togglePasswordVisibility } from "../../redux/auth/slice";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { useEffect } from "react";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Enter email"),
  password: Yup.string()
    .min(6)
    .matches(/[0-9]/, "Password must include a number")
    .required(" Enter password "),
});

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const showPassword = useSelector((state) => state.auth.showPassword);
  const error = useSelector((state) => state.auth.error);
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const handlePasswordVisibilityToggle = () => {
    dispatch(togglePasswordVisibility());
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
            <div className={s.wrapperBox}>
              <Field
                className={s.input}
                id="email"
                name="email"
                placeholder="Enter email"
              />
            </div>
            {errors.email && touched.email && (
              <div className={s.error}>{errors.email}</div>
            )}

            <label htmlFor="password" className={s.label}>
              Password
            </label>
            <div className={s.passwordBox}>
              <Field
                className={s.input}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <span
                className={s.eyeIcon}
                onClick={handlePasswordVisibilityToggle}
              >
                {showPassword ? (
                  <FaRegEye size={25} />
                ) : (
                  <PiEyeClosedDuotone size={25} />
                )}
              </span>
            </div>
            {errors.password && touched.password && (
              <div className={s.error}>{errors.password}</div>
            )}
            {error && <div className={s.error}>{error}</div>}

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
