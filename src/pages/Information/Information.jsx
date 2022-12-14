import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import "./Information.css";

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate()
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
  }

  return (
    <section className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
          <Link to="/checkout" className="Information-back">
            Atrás
          </Link>
          <button type="submit" onClick={handleSubmit} className="Information-next">
            Pagar
          </button>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <ul>
            {cart.map((item) => (
              <li className="Information-element">
                <h4>{item.title}</h4>
                <span>{item.price}€</span>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </section>
  );
}

export default Information;