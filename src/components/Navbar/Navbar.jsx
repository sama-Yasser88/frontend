import React from 'react'
import "./Navbar.css"


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand fw-bolder my-font  fs-2 col-1" href="#">Hekto</a>
    <div className="collapse navbar-collapse col-5" id="navbarNavDropdown">
      <ul className="navbar-nav mx-5">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Home
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
   <form className="d-flex col-5" role="search">
  <div className="search-box mt-2  mx-5 d-flex w-75 d-none d-md-flex">
    <input
      className="form-control"
      type="search"
      aria-label="Search"
    />
    <div className="bg-color">
    <i className="fa-solid fa-magnifying-glass search-icon  fa-1x "></i>
    </div>
  </div>
</form>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
  
</nav>
</>
  )
}
