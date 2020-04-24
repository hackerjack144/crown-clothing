import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { checkoutSuccess } from '../../redux/cart/cart.actions';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // this is becasue it ask every pay in for of cents instead of dollars
    const publishableKey = 'pk_test_H7blBRa34Mbn8HpXhqlovg8900Vjk7E174';


    const onToken = token =>{
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
      }
        })
        .then(response => {
            alert('succesful payment');
            checkoutSuccess();
        })
        .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };


    return (
    <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );
};

export default StripeCheckoutButton;