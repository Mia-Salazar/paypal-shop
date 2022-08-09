import React from 'react';

import "./Information.css";

const Information = () => {
  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="email" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="number" placeholder="Codigo postal" name="cp" />
            <input type="number" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <button className="Information-back">
            Regresar
          </button>
          <button className="Information-next">
            Pagar
          </button>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <ul>
            <li className="Information-element">
              <h4>ITEM Name</h4>
              <span>10€</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Information;