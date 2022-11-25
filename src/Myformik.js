import React from "react";
import { Formik, Field, Form } from "formik";

export default function Myformik() {
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          middlename: "",
          lastname: "",
          cityname: "",
        }}
        onSubmit = {(e)=> {
          console.log(e)
        }
        }
      >
        <Form>
          <label htmlFor="">First Name : </label>
          <Field id="firstname" name="firstname" type="text" /><br/>

          <label htmlFor="">Middale Name : </label>
          <Field id="middlename" name="middlename" type="text" /><br/>

          <label htmlFor="">Last Name : </label>
          <Field id="lastname" name="lastname" type="text" /><br/>

          <label htmlFor="">City Name : </label>
          <Field id="cityname" name="cityname" type="text" /><br/>

          <input type="submit" value="submit"/>
        </Form>
      </Formik>
    </div>
  );
}
