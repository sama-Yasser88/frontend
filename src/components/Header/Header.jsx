import React from 'react'
import "./Header.css"
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">


            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#headerContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="headerContent">


              <div className="d-flex flex-column flex-lg-row col-lg-6">
                <p className="p-2 ms-4 mt-1">
                  <i className="fa-regular fa-envelope mx-3"></i>
                  samayasser8953@gmail.com
                </p>

                <p className="p-2 mt-1">
                  <i className="fa-solid fa-phone mx-3"></i>
                  01204894925
                </p>
              </div>


              <div className="d-flex flex-column flex-lg-row col-lg-6 ms-lg-auto">
                <p className="p-2 mt-1">English</p>
                <p className="p-2 mx-1 mt-1">USD</p>

                <Link     to="/Login"     className="p-2 mx-1 mt-1 inline-flex items-center text-white no-underline text-decoration-none"   >
                  Login <i className="fa-regular fa-user ml-1"></i>
                </Link>

                <p className="p-2 mx-1 mt-1">
                  Wishlist <i className="fa-regular fa-heart"></i>
                </p>

                <span className="mt-1 p-2 mx-4">
                  <BsCart3 size={27} />
                </span>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </>
  )
}