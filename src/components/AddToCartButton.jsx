import React from 'react';
import cartIcon from '../images/icon-cart.svg';

const AddToCartButton = ({ itemQty, setItemQty}) => {
  return (
    <>
        <button className='btn' 
        onClick={() => {setItemQty(itemQty + 1)}}
        >
            <img className='cart-icon' src={cartIcon}/>
            Add to cart
        </button> 
    </>
  )
}

export default AddToCartButton;
