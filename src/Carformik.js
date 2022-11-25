import React from "react";
import { Formik, Field, Form } from "formik";

export default function Carformik() {
  return (
    <div>
      <Formik
        initialValues={{
          carnumber: "",
          carbrand: "",
          carmodel: "",
          fueltype:"",
          isSUV:""
        }}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <Form>
          <label htmlFor="">Car Number : </label>
          <Field id="carnumber" name="carnumber" type="text" /><br/>

          <label htmlFor="">Car Brand : </label>
           <Field as='select'  name="carmodel">
            <option value="Suzuki">Suzuki</option>
            <option value="Hundai">Hundai</option>
            <option value="Mahindra">Mahindra</option>
           </Field><br/>

           <label htmlFor="">Car Model : </label>
           <Field as='select'  name="carmodel">
            <option value="Swift">Swift</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Thar">Thar</option>
           </Field><br/>

           <label htmlFor="">Fuel Type : </label>
           
              <Field type="radio" name="fueltype" value="One" />CNG
              <Field type="radio" name="fueltype" value="Two" />Petrol
              <Field type="radio" name="fueltype" value="One" />Diseal
              <Field type="radio" name="fueltype" value="Two" />Electric<br/>
              
              <label>isSUV :</label>
              <Field type="checkbox" name="isSUV"/>SUV<br/>

              <label>ISBS6 :</label>
              <Field type="checkbox" name="ISBS6"/>BS6<br/>

              <input type="submit" value="submit"/>


        </Form>
      </Formik>
    </div>
  );
}
