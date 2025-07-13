import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const addPaypalScript = async () => {
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=USD`;
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          renderPaypalButtons();
        };
      } else {
        renderPaypalButtons();
      }
    };

    const renderPaypalButtons = () => {
      window.paypal.Buttons({
        createOrder: async (data, actions) => {
          try {
            const response = await axios.post('/api/user/paypal/create-order', { amount });
            return response.data.id;
          } catch (error) {
            onError(error);
          }
        },
        onApprove: async (data, actions) => {
          try {
            const response = await axios.post(`/api/user/paypal/capture-order/${data.orderID}`);
            onSuccess(response.data);
          } catch (error) {
            onError(error);
          }
        },
        onError: (err) => {
          onError(err);
        }
      }).render(paypalRef.current);
    };

    addPaypalScript();
  }, [amount, onSuccess, onError]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
