import React, { useContext } from 'react';
import { ProductContext } from '../../context/Products-context';
import FeaturedProduct from '../Shared/Featured-product';

const FeaturedCollection = () => {

    const { products } = useContext(ProductContext);
    const productItems = products
                            .filter((product, i) => i < 4)
                            .map(product => (
                                <FeaturedProduct {...product} key={product.id} />
                            ))
    return (
        <div className='featured-collection container'>
            <h2 className='featured-collection-title'>
                Featured Collection
            </h2>
            <div className='products'>
                {
                    productItems
                }
            </div>
        </div>
    );
};

export default FeaturedCollection;
