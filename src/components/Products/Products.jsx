import React from 'react';

import Product from '../Product/Product';
import './Products.css';

const Products = ({ products }) => {
  return (
    <section className="Products">
      <article className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </article>
    </section>
  );
}

export default Products;