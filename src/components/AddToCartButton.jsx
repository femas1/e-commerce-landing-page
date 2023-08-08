import React from 'react';
import cartIcon from '../images/icon-cart.svg';

const AddToCartButton = ({ itemQty, setItemQty, inputValue}) => {
  return (
    <>
        <button className='btn' 
                id='add-to-cart-btn'
              onClick={() => {inputValue > 0 && setItemQty(itemQty + inputValue)}}
        >
            <img className='cart-icon' src={cartIcon}/>
            Add to cart
        </button> 
    </>
  )
}

export default AddToCartButton;
