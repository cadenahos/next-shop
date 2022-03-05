import React, {useContext} from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import bike from '@logos/logo_yard_sale.svg';
import addCart from '@icons/bt_add_to_cart.svg';


const ProductItem = ({product}) => {
    const {AddToCart} = useContext(AppContext);

    const handleClick = item => {
        AddToCart(item);
    };
    return (
        <div className={styles['ProductItem']}>
            <Image src={product.images[0].length > 0 && product.images[0].includes("https://") ? product.images[0] : bike } 
            alt={product.title}  
            className={styles['ProductItem-image']} 
            width="240"
            height="240"
            />
            <div className={styles['product-info']}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure>
                    <div
                    role="presentation"
                    onClick={() => handleClick(product)} 
                    onKeyDown={() => handleClick(product)}
                    >
                        <Image src={addCart} alt="" />
                    </div>
                </figure>
                
            </div>
        </div>
    );
};

export default ProductItem;