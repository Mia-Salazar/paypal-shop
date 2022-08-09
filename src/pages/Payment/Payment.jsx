import React from 'react';

import "./Payment.css";

const Payment = () => {
  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        <button className="Payment-button">
          Boton de pago con Paypal
        </button>
      </div>
      <div />
    </section>
  );
}

export default Payment;