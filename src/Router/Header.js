import React from 'react'
import { Link } from "react-router-dom"

export default function () {
  return (
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-item" to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-item" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-item" to="/contact">Contact</Link>
        </li>  
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
