import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardFrom from '../SimpleCardFrom/SimpleCardFrom';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const ProcessMethod = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
              <SimpleCardFrom></SimpleCardFrom>

          </Elements>
        </div>
    );
};

export default ProcessMethod;