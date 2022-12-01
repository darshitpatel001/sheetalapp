import React from "react";
import { Formik, Form , Field} from "formik";

export default function () {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form onChange={onSubmit}>

        <label htmlFor=""> Email : </label>
        <Field name="email" type="text" />
        <label htmlFor=""> Password : </label>
        <Field name="password" type="text" />

        </Form>
      </Formik>
    </div>
  );
}
