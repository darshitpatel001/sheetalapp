import React from "react";
import "./Formcoll.css";
import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from "formik";

let schema = yup.object().shape ({
  firstname:  yup.string().required("First Name is required"),
  middalname: yup.string().required("Middle Name is required"),
  lastname: yup.string().required("Last Name is required"),
  cityname: yup.string().required("City Name is required"),
  email: yup.string().email("email is required"),
})


export default function Formformik() {
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          middalname: "",
          lastname: "",
          cityname: "",
          zipcode:"",
          email: "",
          password: "",
          hobbies: "",
        }}
        validationSchema ={schema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form class="container">
          <label htmlFor="">First Name : </label>
          <Field id="firstname" name="firstname" type="text" />
          <ErrorMessage name="firstname"/>
          <br />
          <label htmlFor="">Middal Name : </label>
          <Field id="middalname" name="middalname" type="text" />
          <ErrorMessage name="middalname"/>
          <br />
          <label htmlFor="">Last Name : </label>
          <Field id="lastname" name="lastname" type="text" />
          <ErrorMessage name="lastname"/>
          <br />
          <label htmlFor="">City Name : </label>
          <Field id="cityname" name="cityname" type="text" />
          <ErrorMessage name="cityname"/>
          <br />
          <label htmlFor="">Email : </label>
          <Field id="email" name="email" type="text" />
          <ErrorMessage name="email"/>
          <br />
          <label htmlFor="">Password : </label>
          <Field id="password" name="password" type="password" />
          <br />
          <label htmlFor="">Zip Code : </label>
          <Field id="zipcode" name="zipcode" type="text" />
          <br />
          <label> Hobbies : </label>Music
          <Field type="checkbox" name="hobbies" value="music" />
          <label> Reading </label>
          <Field type="checkbox" name="hobbies" value="Reading" />
          <label> Cricket </label>
          <Field type="checkbox" name="hobbies" value="Cricket" />
          <br />
          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
}
