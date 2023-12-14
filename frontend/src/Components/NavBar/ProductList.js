// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductList = ({ match }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:9000/products/:brand');
//         console.log('Products:', response.data); 
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error.message);
//       }
//     };
  
//     fetchProducts();
//   }, [match.url]);
  

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product._id}>{product.brand} - {product.title}</li>
//           // Add other product details as needed
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { brand } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/products/${brand}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, [brand]);

  return (
    <div>
      <h2>{brand} Product List</h2>
      <ul>
        {products.map(product => (
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
};

export default ProductList;
