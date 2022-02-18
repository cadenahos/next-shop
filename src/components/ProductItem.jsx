import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';

import addCart from '@icons/bt_add_to_cart.svg';
const bike = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({product}) => {
    const {AddToCart} = useContext(AppContext);

    const handleClick = item => {
        AddToCart(item);
    }
    return (
        <div className="ProductItem">
        <img src={product.images[0]} alt={product.title} />
        <div className="product-info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)}>
                <img src={addCart} alt="" />
            </figure>
            
        </div>
    </div>
    );
};

export default ProductItem;