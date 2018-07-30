import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){
        
        return(
            <StripeCheckout 
            amount ={500} //automatic pakai $ (cent) 5$
            token = {token=> this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className = "btn">Donasi</button>
            </StripeCheckout>
        );
    }
}

export default connect (null, actions) (Payments);