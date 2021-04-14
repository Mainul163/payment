import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
const SimpleCardFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const[paymentError,setPaymentError]=useState('')
    const[paymentSuccess,setPaymentSuccess]=useState('')
    const handleSubmit = async (event) => {
   
      event.preventDefault();
  
      if (!stripe || !elements) {
       
        return;
      }
  
    
      const cardElement = elements.getElement(CardElement);
  
    
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message)
        setPaymentSuccess('')
        console.log('[error]', error);
      } else {
        setPaymentSuccess(paymentMethod.id)
        setPaymentError('')
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  {
    paymentError&& <p style={{color:'red'}}>{paymentError}</p>

  }
  {
    paymentSuccess&& <p style={{color:'green'}}>your payment method is successfull</p>
  }
        </div>
    );
};

export default SimpleCardFrom;