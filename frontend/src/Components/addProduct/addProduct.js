import React, { useState } from "react";
import './addProduct.css'
import axios from 'axios';


const AddProduct = () =>{

const [title, settitle] = useState('');

const [description, setdescription] = useState('');

const [price, setPrice] = useState('');

const [images, setCategory] = useState('');

const [brand, setBrand] = useState('');

const [errorMessage, setErrorMessage] = useState('');


// const addProduct=() => {
//     console.warn(title , images , brand , description , price);
// };

const addProduct = async () => {
    try {
      const response = await axios.post('/admin/add-product', {
        title,
        description,
        price,
        brand,
        images,
      });

      console.log('Product added successfully:', response.data);
    } catch (error) {
        console.error("Error submitting data:", error.response.data.error);
      setErrorMessage(error.response.data.error || 'Error adding product:');
    //   console.error('Error adding product:', error.response.data.error);
    }
  };

return ( 

    <div className='product'>
        <h1>Add Product</h1>

        <input type="text" placeholder='Enter product title' className='inputBox' 
        value={title} onChange={(e)=> {settitle(e.target.value)}}
        />

        <input type="text" placeholder='Enter product price' className='inputBox' 
        value={price} onChange={(e)=> {setPrice(e.target.value)}}
        />

        <input type="text" placeholder='Enter product description' className="inputBox" 
        value={description} onChange={(e)=>{setdescription(e.target.value)}}
        />
        
        <input type="text" placeholder='Enter product images' className='inputBox' 
        value={images} onChange={(e)=>{setCategory(e.target.value)}}
        />

        <input type="text" placeholder='Enter product brand' className="inputBox" 
        value={brand} onChange={(e)=>{setBrand(e.target.value)}}
        />
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={addProduct} className='appButton'>Add Product</button>

</div>
)};
 export default AddProduct;