import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // this is becasue it ask every pay in for of cents instead of dollars
    const publishableKey = 'pk_test_H7blBRa34Mbn8HpXhqlovg8900Vjk7E174';


    const onToken = token =>{
        console.log(token);
        alert('Payent Success');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CROWN CLOTHING LIMITED'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;