import React from 'react';

import "./Checkout.css";

const Checkout = () => {
  return (
    <section className="Checkout">
      <div className="Checkout-content">
        <h2>Lista de Pedidos:</h2>
        <ul>
          <li className="Checkout-item">
            <div className="Checkout-element">
              <h3>ITEM name</h3>
              <span>$10</span>
            </div>
            <button type="button">Eliminar</button>
          </li>
        </ul>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </section>
  );
}

export default Checkout;