import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Formik, Form, Field } from "formik";

export default function () {
  
  return (
    <div class="w-50 mx-auto">
      <h2 class="text-center">Login Form</h2>      
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        
        onSubmit={(e) => {
          axios.post("http://localhost:4000/accounts/authenticate",e)
            .then(y=> {
              console.log(y.data);

              lo
              toast("Login is Successful");

            }).catch(() =>{
              toast("Login is Faild");
            })
          }}
      >

        <Form >
          <label htmlFor="" class="form-label"> Email : </label>
          <Field type="email" class="form-control" name="email"/><br/>
          <label htmlFor=""  class="form-label"> Password : </label>
          <Field type="password" class="form-control" name="password"  /><br/>

          <input type="submit" class="form-control btn btn-outline-primary" value="Sign-in" />
        </Form>
      </Formik>
    </div>
  );
}
