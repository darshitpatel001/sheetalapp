import React from "react";

export default function Simplprops(first) {
  return (
    <div className="col-4">
      <div class="card">
        <img class="card-img-top" src={first.record.image} />
        <div class="card-body">
          <h4 class="card-title">{first.record.id}</h4>
          <h4 class="card-title">{first.record.title}</h4>
          <h4 class="card-title">{first.record.price}</h4>
          <h4 class="card-title">{first.record.description}</h4>
        </div>
      </div>
    </div>
  );
}
