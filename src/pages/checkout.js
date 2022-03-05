import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
const CheckOut = () => {
  const {state} = useContext(AppContext);
  const sumTotal = ()=>{
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};
  const itemNumber = ()=>{
    const items = state.cart.length;
    return items;
  };
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles['title']}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles['order']}>
              <p>
                <span>Order</span>
                <span>{itemNumber()} articles</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {
            state.cart.map(product => (
            <OrderItem product={product} key = {`productItem-${product.id}`} />
            ))
				  }
        </div>
      </div>
    </>
  );
};

export default CheckOut;
