import React from "react";
import ReactDOM from "react-dom";
// import { Formik, Field, Form, ErrorMessage} from "formik";
import { useFormik } from "formik";
import "./index.css";
// import Yup from 'yup';

// VALIDATION
const validate = values => {
  const errors = {};
  if (!values.emailField) {
    errors.emailField = 'Field required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
    errors.emailField = 'Username should be an email';
}

if (!values.pswField) {
  errors.pswField = 'Field required';
} else if (values.pswField.length > 15) {
  errors.pswField = 'Must be 15 characters or less';
}

return errors;
};


// SIGN UP FORM
// TODO: import useFormik from formik library
const SignupForm = () => {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    validate,
    onSubmit: values => {
      alert("Login Successful");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="emailField">Username</label>
      <input id="emailField"
             name="emailField"
             type="email"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.emailField}
     />
     {formik.errors.emailField ? <div id="emailError">{formik.errors.emailField}</div> : null}

      <label htmlFor="pswField">Password</label>
      <input id="pswField"
             name="pswField"
             type="text"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.pswField}
     />
      {formik.errors.pswField ? <div id="pswError">{formik.errors.pswField}</div> : null}

     <button id="submitBtn" type="submit">Submit</button>
    </form>
  );
};  


function App() {
  return <SignupForm />;
}

export default App;