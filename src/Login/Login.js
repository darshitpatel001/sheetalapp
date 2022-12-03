import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Formik, Form, Field } from "formik";

export default function () {
  
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(e) => {
          axios
            .post("http://localhost:4000/api-docs/#/default/authenticate",e)
            .then((y) => {
              toast("Login is Successful");
              console.log(e);
            }).catch((y) =>{
                toast("Login is Faild");
            });
        }}
      >
        <Form>
          <label htmlFor=""> Email : </label>
          <Field name="email" type="text" /><br/>
          <label htmlFor=""> Password : </label>
          <Field name="password" type="text" /><br/>

          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
}
