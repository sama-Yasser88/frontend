import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";



export default function MasterLayout() {
  
  return (
    <>
      <Header />
      <Navbar />
       <Outlet/>
      <Footer />
    </>
  );
}
