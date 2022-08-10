import React from 'react';
import { Link } from 'react-router-dom';

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
            <button type="button">Eliminar <i className="fas fa-trash-alt" title="Eliminar" /></button>
          </li>
        </ul>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <Link to="/checkout/information">
          Continuar pedido
        </Link>
      </div>
    </section>
  );
}

export default Checkout;