import React from "react";
import productData from "./Laps_Product";
import "./products.css";

function Product() {
    const products = productData();
    return (
      <div>
        <ul>
          {products.map((product) => (
            <section className="card-container">
                <section className="card">
                    <img src = {product.images} alt="" className='card-img'/>
                        <div className='details'>
                            <h3> {product.brand} </h3>
                <h2 className='card-title'>{product.title}</h2>
                <p className='description-card'> {product.description} </p>
                <p className='card-price'> price : {product.price} EGP </p>
                <button  className="bnt" onClick={() => { 
                    console.log('you are going to buy ', product.title , product.price)
                }}> buy </button>
            </div>
        </section>
    </section>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Product;
