import React, { useContext } from 'react';
import Layout from '../../Shared/Layout';
import FeaturedProduct from '../../Shared/Featured-product';
import { ProductContext } from '../../../context/Products-context';
import './Shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductContext);
    const allProducts = products
                            .map(product => (
                                <FeaturedProduct {...product} key={product.id} />
                            ));
  return (
      <Layout>
        <div className='product-list-container'>
            <h2 className='product-list-title'>Shop</h2>
            <div className='product-list'>
                {
                    allProducts
                }
            </div>
        </div>
      </Layout>
  );
};

export default Shop;
