import React from "react";

export default function Educationinfo(props) {
  return (
    <div>
      {props.data .filter((ad) => {
                           return (
                               ad.firstname.toUpperCase().indexOf(props.find.toUpperCase()) >= 0
                           )
                     }).map((value, index) => {
        return (
          <div>
             {/* <div className="m-2">
    <div className=' w-100 p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}> */}
            <table>
            <thead>
            <th> <td style={{ border: "none" }} >First Name </td></th>
                     <th> <td style={{ border: "none" }} > Last Name </td></th>
                     <th> <td style={{ border: "none" }} > Email </td></th>
                     <th> <td style={{ border: "none" }} > Mobile </td></th>
                     <th> <td style={{ border: "none" }} > City </td></th>
                     <th> <td style={{ border: "none" }} > Edit </td></th>
                     <th> <td style={{ border: "none" }} > Delete </td></th>
          
            </thead>
            <tbody>
                  <tr>
                     <td>{value.firstname}</td>
                     <td>{value.lastname}</td>
                     <td>{value.Email}</td>
                     <td> {value.Mobile} </td>
                     <td>{value.City}</td>
                     <td><button onClick={() => {props.editmy(index);}}>Edit</button><br /><br /></td>
                     <td><button onClick={() => {props.remove(index);}}>Delete</button><br /><br /></td>
                   </tr>
            </tbody>
            </table>
            </div>
          //   </div>
          // </div>
        );
      })}
    </div>

  );
}
