import React from 'react'

export default function Apiprect1disply(props) {
  return (
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>User name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Geo</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{props.disp.id}</td>
        <td>{props.disp.name}</td>
        <td>{props.disp.username}</td>
        <td>{props.disp.email}</td>
        <td>{props.disp.address.city}</td>
        <td>{props.disp.address.geo.lng}</td>
      </tr>
      </tbody>
    </table>
  )
}
