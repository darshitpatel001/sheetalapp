import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
          axios.post("http://localhost:4000/api-docs/#/default/authenticate",e)
            .then(y=> {
              console.log(y.data);
              toast("Login is Successful");

            }).catch(
              () =>{
                toast("Login is Faild");

            });
        }}
      >
        <Form class="container">
          <label htmlFor=""> Email : </label>
          <Field type="text" name="email"/><br/>
          <label htmlFor=""> Password : </label>
          <Field type="text"  name="password"  /><br/>

          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
}
