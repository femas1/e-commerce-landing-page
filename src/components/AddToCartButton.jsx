import React from 'react';
import cartIcon from '../images/icon-cart.svg';

const AddToCartButton = () => {
  return (
    <>
        <button className='btn'>
            <img className='cart-icon' src={cartIcon}/>
            Add to cart
        </button> 
    </>
  )
}

export default AddToCartButton;
