import React from 'react';
import logo from '../images/logo.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';

const Navbar = () => {
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
            <a href="#" className="cart">
                <img src={cart} alt="" />
            </a>
            <a href="#" className="avatar">
                <img className="image-avatar" src={avatar} alt="" />
            </a>
        </div>
    </nav>
    </>
  )
}

export default Navbar;
