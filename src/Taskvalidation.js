import React from "react";
import * as yup from "yup";
import "./Taskvalidation.css";
import { Formik, Field, Form, ErrorMessage } from "formik";

let schema = yup.object().shape({
  firstname: yup.string().max(25, "minimum 25 Limit").required("First Name is required"),
  middalname: yup.string().max(25, "minimum 25 Limit").required("Middle Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().email("email is not required"),
  password: yup.string().min(5, "short").max(15, "long").required("password is required"),
  zipcode: yup.string().max(6, "long").matches(/(?=.*[0-9])/, "zip code must a number").required("zip code is required"),
  Address: yup.string().max(200, "min 25 limt").required("address is required"),
});

export default function Taskvalidation() {
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          middalname: "",
          lastname: "",
          email: "",
          password: "",
          zipcode:"",
          Address:""
        }}
        validationSchema={schema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form class="decor">
          <div class="form-left-decoration"></div>
          <div class="form-right-decoration"></div>
          <div class="circle"></div>
          <div class="form-inner">
          <h3>Form</h3>
            <label htmlFor="">First Name : </label>
            <Field id="firstname" name="firstname" type="text" />
            <ErrorMessage
              name="firstname"
              component="div"
              className="text-danger"
            />
            <br />
            <label htmlFor="">Middal Name : </label>
            <Field id="middalname" name="middalname" type="text" />
            <ErrorMessage
              name="middalname"
              component="div"
              className="text-danger"
            />
            <br />
            <label htmlFor="">Last Name : </label>
            <Field id="lastname" name="lastname" type="text" />
            <ErrorMessage
              name="lastname"
              component="div"
              className="text-danger"
            />
            <br />
            <label htmlFor="">Email : </label>
            <Field id="email" name="email" type="text" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
            <br />
            <label htmlFor="">Password : </label>
            <Field id="password" name="password"  type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
            <br />
            <label htmlFor="">Zip Code : </label>
            <Field id="zipcode" name="zipcode" type="text" />
            <ErrorMessage
              name="zipcode"
              component="div"
              className="text-danger"
            />
            <br />

            <label>Address :</label>
            <Field id="Address" name="Address" type="text" />
            <ErrorMessage
              name="Address"
              component="div"
              className="text-danger"
            />
            <input class="btn" type="submit" value="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
