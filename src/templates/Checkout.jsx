import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
const CheckOut = () => {
	const {state} = useContext(AppContext);
	console.log(state);
    return (
        <div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				{
					state.cart.map(product => (
					<OrderItem product={product} key = {`productItem-${product.id}`} />
					))
				}
			</div>
		</div>
    );
};

export default CheckOut;