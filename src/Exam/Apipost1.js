import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";

export default function Apipost1() {

    
  return (
    <div  class="w-50 mx-auto">
        <Formik
        initialValues={{
            userId:"",
            id:"",
            title:"",
            body:""
        }}
        onSubmit={(e) => {
            axios.post("https://jsonplaceholder.typicode.com/posts")
            .then((y) =>{
                console.log(y);
                toast("Data Successful");
            })
        }}
        >
            <Form>
            <label htmlFor="" class="form-label"> User id: </label>
          <Field type="userId" class="form-control" name="userId"/><br/>

          <label htmlFor="" class="form-label">Id: </label>
          <Field type="id" class="form-control" name="id"/><br/>

          <label htmlFor="" class="form-label"> Title: </label>
          <Field type="title" class="form-control" name="title"/><br/>

          <label htmlFor="" class="form-label"> Body: </label>
          <Field type="body" class="form-control" name="body"/><br/>
          
          <input type="submit" value="submit"/>
            </Form>

        </Formik>
    </div>
  )
}

