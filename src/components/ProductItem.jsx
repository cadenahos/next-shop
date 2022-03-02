import React, {useContext} from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';

import addCart from '@icons/bt_add_to_cart.svg';
const bike = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({product}) => {
    const {AddToCart} = useContext(AppContext);

    const handleClick = item => {
        AddToCart(item);
    }
    return (
        <div className={styles['ProductItem']}>
        <Image src={product.images[0]} alt={product.title}  className={styles['ProductItem-image']} width='240' height='240'/>
        <div className={styles['product-info']}>
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)}>
                <Image src={addCart} alt="" />
            </figure>
            
        </div>
    </div>
    );
};

export default ProductItem;