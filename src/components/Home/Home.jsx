import React from 'react';
import "./Home.css";           
import header from "../../assets/hero.png";
import sofa from "../../assets/sofa.png";
import lamp from "../../assets/image 32.png";
import cap from "../../assets/header.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/image 2.png";
import img3 from "../../assets/image 3.png";
import img4 from "../../assets/discount sofa.png";






export default function Home() {
  return (
    <div className="home-page">
      
      <div className="hero">

        <div className="col-2">

          <img src={lamp} alt=""  className="w-75 ms-5"/>

        </div>

        <div className="col-6">

          <div className="cap mt-5">

            <img src={cap} alt="" className='mt-5 w-75'   />

          </div>

          <div className="button">

            <button   type="button"   className="btn mt-5 w-25"   style={{ backgroundColor: "#FB2E86", borderColor: "#FB2E86", color: "white" }} >   shop now

            </button>

          </div>

        </div>

        <div className="col-4 ">

          <img src={sofa} alt="" className="w-75 mt-3" />

        </div>

      </div>
      <div className="featured py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Featured Products</h2>
          
          <div className="row g-4">
            {[
              { name: "Comfortable Chair", price: "From $99", badge: "New", color: "primary" },
              { name: "Comfortable Chair", price: "From $120", badge: "Sale", color: "danger" },
              { name: "Comfortable Chair", price: "From $85", badge: "New", color: "primary" },
              { name: "Comfortable Chair", price: "From $150" }
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card border-0 shadow-sm h-100 text-center position-relative">
                  {item.badge && (
                    <span className={`badge bg-${item.color} position-absolute top-0 start-0 m-3`}>
                      {item.badge}
                    </span>
                  )}
                  <div className="p-4" style={{ height: "220px", background: "#f8f9fa", borderRadius: "8px" }}>
                    <img 
                      src={img1}
                      alt={item.name}
                      className="img-fluid h-100 object-fit-contain"
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-muted mb-0">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="latest py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Latest Products</h2>
          
          <div className="row g-4">
            {[
              { name: "Comfortable Pink Cloth", price: "From $230", badge: "New Arrival" },
              { name: "Comfortable Yellow Cloth", price: "From $180", badge: "Hot" },
              { name: "Comfortable White Cloth", price: "From $99" },
              { name: "Comfortable Black Cloth", price: "From $120" },
              { name: "Comfortable Grey Cloth", price: "From $150" },
              { name: "Comfortable Beige Cloth", price: "From $140" },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100 overflow-hidden">
                  <div className="position-relative">
                    <img 
                      src={`https://picsum.photos/id/${40 + i}/400/280`} 
                      className="card-img-top" 
                      alt={item.name}
                      style={{ height: "240px", objectFit: "cover" }}
                    />
                    {item.badge && (
                      <span className="badge bg-danger position-absolute top-0 end-0 m-3 fs-6">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="card-body text-center py-4">
                    <h6 className="fw-bold">{item.name}</h6>
                    <p className="text-primary fw-semibold mb-0">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   <div className="container mx-auto  ">
    <div className="mx-5  w-100">
      <img src={img4} alt=""  className='d-block mx-auto img-fluid'/>
    </div>
    
   </div>

    <div className="hero">

    </div>

    </div>
  );
}