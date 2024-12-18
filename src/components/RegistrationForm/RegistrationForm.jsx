import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { togglePasswordVisibility } from "../../redux/auth/slice";
import { FaRegEye } from "react-icons/fa";
import { PiEyeClosedDuotone } from "react-icons/pi";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6)
    .matches(/[0-9]/, "Password must include a number")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPassword = useSelector((state) => state.auth.showPassword);

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
  const handlePasswordVisibilityToggle = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Create an Account</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
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
            {errors.name && touched.name && (
              <div className={s.error}>{errors.name}</div>
            )}

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
            <div className={s.passwordBox}>
              <Field
                id="password"
                className={s.input}
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

            <button className={s.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
