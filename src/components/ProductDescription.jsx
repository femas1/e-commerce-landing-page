import React, { useState } from 'react';
import QuantityInput from './QuantityInput';
import AddToCartButton from './AddToCartButton'

const ProductDescription = ({ itemQty, setItemQty}) => {

  const [inputValue, setInputValue] = useState(0);

  return (
    <div className='product-description'>
      <h4 className='brand'>Sneaker Company</h4>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="description-text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
    <div className="prices">
        <h4 className="price">$125.00</h4>
        <h3 className="discount">50%</h3>
      </div>
        <h3 className="old-price">$250.00</h3>
    <div className="quantity">
        <QuantityInput inputValue={inputValue} setInputValue={setInputValue}/>
        <AddToCartButton itemQty={itemQty} setItemQty={setItemQty} inputValue={inputValue}/>
    </div>
    </div>
  )
}

export default ProductDescription;
