import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../Shared/Layout';
import './Checkout-page.styles.scss';

const CheckoutPage = ({ history }) => {
    return (
        <Layout>
            <div className='checkout-container'>
                <div className='checkout-text'>
                    <p>Thanks for shopping with us.</p>
                </div>
                <div className='checkout-btn-container'>
                    <button className='button is-black nomad-btn' onClick={() => history.push('/shop')}>CONTINUE SHOPPING</button>
                </div>
            </div>
        </Layout>
    );
};

export default withRouter(CheckoutPage);
