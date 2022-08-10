import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import "./Checkout.css";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <section className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0  ?<h2>Lista de Pedidos:</h2> : <h2>No hay productos añadidos</h2>}
        <ul>
          {cart.map((item) => (
            <li className="Checkout-item">
              <div className="Checkout-element">
                <h3>{item.title}</h3>
                <span>{item.price}€</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                Eliminar
                <i className="fas fa-trash-alt" />
              </button>
            </li>
          ))}

        </ul>
      </div>
      {cart.length > 0 &&
      <div className="Checkout-sidebar">
        <h3>{`Precio Total: ${handleSumTotal()}€`}</h3>
        <Link to="/checkout/information">
          Continuar pedido
        </Link>
      </div>}
    </section>
  );
}

export default Checkout;