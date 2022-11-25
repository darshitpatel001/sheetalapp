import React from 'react'

export default function Simplprops(first) {
  return (
    <div style={{backgroundColor:'none'}}>
    <div class="card" style="width:400px">
    <img class="card-img-top" src={first.record.image}/>
    <div class="card-body">
      <h4 class="card-title">{first.record.id}</h4>
      <h4 class="card-title">{first.record.title}</h4>
      <h4 class="card-title">{first.record.price}</h4>
      <h4 class="card-title">{first.record.description}</h4>
      <p class="card-text">Some example text.</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
  </div>
  )
}
