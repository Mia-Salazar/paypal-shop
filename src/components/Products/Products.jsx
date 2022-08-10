import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }
  return (
    <section className="Products">
      <article className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </article>
    </section>
  );
}

export default Products;