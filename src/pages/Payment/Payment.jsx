import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

import AppContext from '../../context/AppContext';
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate()
  const { state } = useContext(AppContext);
  const { cart } = state;
  const paypalOtions = {
    clientId: 'AZZLgxAuZeecA8Tw4M8KtoqH0XoL_Ez1isZeg_LZW4rEpAz74s0hGHX4ssrivkMQJfr6fAvskXj_vFOO',
    intent: 'capture',
    currency: 'EUR'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success')
    }
  }

  return (
    <section className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        <ul>
          {cart.map((item) => (
            <li className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}€</span>
            </li>
          ))}
        </ul>
        <PayPalButton
          paypalOptions={paypalOtions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onPaymentStart={() => console.log('Start Payment')}
          onPaymentSuccess={data => handlePaymentSuccess(data)}
          onPaymentError={error => console.log(error)}
          onPaymentCancel={data => console.log(data)}
        ></PayPalButton>
      </div>
      <div />
    </section>
  );
}

export default Payment;