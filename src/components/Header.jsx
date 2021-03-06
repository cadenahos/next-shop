import React, {useState, useContext} from 'react';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import Link from 'next/link';
import MyOrder from '@containers/MyOrder';
import Image from 'next/image';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);

    const {state} = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };
return (
    <>
        <nav className={styles.Nav}> 
            <Image src={menu.src} alt="menu" 
            className={styles.menu}
            width='20px'
            height='20px'
            />
            <div className={styles['navbar-left']}>
                <Link href="/" passHref>
                    <Image src={logo} alt="logo" className={styles['nav-logo']}/>
                </Link>
                <ul>
                    <li>
                        <Link href="/">All</Link>
                    </li>
                    <li>
                        <Link href="/">Clothes</Link>
                    </li>
                    <li>
                        <Link href="/">Electronics</Link>
                    </li>
                    <li>
                        <Link href="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link href="/">Toys</Link>
                    </li>
                    <li>
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <li 
                    className={styles['navbar-email']} 
                    >
                        <div
                        role="presentation"  
                        onClick={handleToggle} 
                        onKeyPress={handleToggle} 
                        >
                            platzi@example.com
                        </div>
                    </li>
                    <li 
                        className={styles['navbar-shopping-cart']} 
                    >
                        <div
                        role="presentation"  
                        onClick={() => setToggleOrders(!toggleOrders)}
                        onKeyDown={() => setToggleOrders(!toggleOrders)}
                        >
                            <Image 
                            src={shopingCart} 
                            alt="shopping cart"/> 
                            {state.cart.length > 0 ? <div className={styles['cart-bubble']}> {state.cart.length} </div> :  null }
                        </div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu /> }
            {toggleOrders && <MyOrder /> }
        </nav>
    </>

);
};

export default Header;