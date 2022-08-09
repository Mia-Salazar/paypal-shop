import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="Products-item">
        <figure>
            <img src={product.image} alt={product.title} />
        </figure>
        <div className="Product-item-info">
            <h2>
                    {product.title}
                <span>
                    {product.price} €
                </span>
            </h2>
            <p>{product.description}</p>
        </div>
        <button type="button">Comprar</button>
    </div>
  );
}

export default Product;