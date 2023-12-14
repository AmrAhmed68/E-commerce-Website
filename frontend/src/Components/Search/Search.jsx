import './Search.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
  
  const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    // Fetch products from the backend when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:9000/product');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Update the filtered products based on the search query
    useEffect(() => {
      const filtered = products.filter((product) =>
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, [searchQuery, products]);
  
    // Debugging logs
    console.log('Products:', products);
    console.log('Search Query:', searchQuery);
    console.log('Filtered products:', filteredProducts);
  
    return (
        <>
      <div >
        <input
          type="stext"
         placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <div>
        <ul>
          {filteredProducts.map((product) => (
            <section className="card-container">
                <section className="card">
                    <img src = {product.images} alt="" className='card-img'/>
                        <div className='details'>
                            <h3> {product.brand} </h3>
                <h2 className='card-title'>{product.title}</h2>
                <p className='description-card'> {product.description} </p>
                <p className='card-price'> price : {product.price} EGP </p>
                <div className='Buy'><button  className="bnt" onClick={() => { 
                    console.log('you are going to buy ', product.title , product.price)
                }}> buy </button></div>
            </div>
        </section>
    </section>
          ))}
        </ul>
      </div>
        </>
      
    );
  };
  
  export default Search;