import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../Shared/Layout';
import { ProductContext } from '../../context/Products-context';
import './Single-product.styles.scss';
import { CartContext } from '../../context/Cart-context';
import { isInCart } from '../../Helpers';

const SingleProduct = ({ match, history }) => {
    const { products } = useContext(ProductContext);
    const { addProduct, cartItems, increase } = useContext(CartContext); 
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products
                            .find(item => Number(item.id) === Number(id))

        // If product doesnt exist redirect to shop page
        if (!product) {
            return history.push('/shop');
        }

        setProduct(product);
    }, [id, product, history.push, products])

    if (!product) { return null}
    const { imageUrl, title, price, description } = product;

    const itemInCart = isInCart(product, cartItems);
    return (
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src={imageUrl} alt='product' />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>$ {price}</p>
                    </div>
                    <div className='add-to-cart-btns'>
                        {
                            !itemInCart && 
                            <button 
                                className='button is-white nomad-btn'
                                id='btn-white-outline'
                                onClick={() => addProduct(product)}>
                                    ADD TO CART
                            </button>
                        }
                        {
                            itemInCart && 
                            <button 
                                className='button is-white nomad-btn'
                                id='btn-white-outline'
                                onClick={() => increase(product)}>
                                    ADD MORE
                            </button>
                        }
                        <button 
                            className='button is-black nomad-btn' 
                            id='btn-white-outline' 
                            onClick={() => history.push('/cart')}>
                                PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className='product-description'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withRouter(SingleProduct);
