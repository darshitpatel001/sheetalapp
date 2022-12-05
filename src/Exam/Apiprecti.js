import React from 'react'
import { Formik, Form, Field } from "formik";
import axios from 'axios';

export default function Apipostprect() {
    return (
        <div  class="w-50 mx-auto">
            <Formik
            initialValues={{
                id:"",
                name:"",
                username:"",
                email:"",
                address:""
            }}
            onSubmit={(e) => {
                axios.post("https://jsonplaceholder.typicode.com/users")
                .then((y) =>{
                    console.log(y);
                    toast("Data save");
                }).catch(() =>{
                    toast("");
                  })
                }}
            >
                <Form>
              <label htmlFor="" class="form-label">Id: </label>
              <Field type="id" class="form-control" name="id"/><br/>
    
              <label htmlFor="" class="form-label"> Name: </label>
              <Field type="name" class="form-control" name="title"/><br/>
    
              <label htmlFor="" class="form-label"> Username: </label>
              <Field type="username" class="form-control" name="username"/><br/>

              <label htmlFor="" class="form-label"> Email: </label>
              <Field type="email" class="form-control" name="email"/><br/>

              <label htmlFor="" class="form-label"> Address: </label>
              <Field type="address" class="form-control" name="address"/><br/>
              
              <input type="submit" value="submit"/>
                </Form>
    
            </Formik>
        </div>
      )
    }
    