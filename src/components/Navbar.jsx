import React from 'react';
import Cart from './Cart';
import logo from '../images/logo.svg';
import avatar from '../images/image-avatar.png';

const Navbar = ({ itemQty, setItemQty}) => {
  return (
    <>
    <nav className='navbar'>
        <div className="logo-links">
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <div className="links">
                <a href="#" className="link">Collections</a>
                <a href="#" className="link">Men</a>
                <a href="#" className="link">Women</a>
                <a href="#" className="link">About</a>
                <a href="#" className="link">Contact</a>
            </div>
        </div>
        <div className="cart-avatar">
            <Cart itemQty={itemQty} setItemQty={setItemQty}/>
            <a href="#" className="avatar">
                <img className="image-avatar" src={avatar} alt="" />
            </a>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
