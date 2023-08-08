import { useState } from 'react';
import cart from '../images/icon-cart.svg';
import deleteIcon from '../images/icon-delete.svg'
import imageProduct from '../images/image-product-1-thumbnail.jpg'


const Cart = ({ itemQty, setItemQty}) => {
  
    const [seeCart, setSeeCart] = useState(false);
    
    return (
    <>
    <div className="dropdown">
      <a onClick={() => setSeeCart(!seeCart)} 
         href="#" 
         className="cart"
      >
        <img src={cart} 
           alt="cart-icon"
           id="cart-icon" 
        />
      </a> 
        <p id="item-qty">{itemQty}</p>
      {seeCart && <div className="dropdown-menu">
        <h5 className="cart-heading">Cart</h5>
        {itemQty > 0 && <div className="cart-wrapper">
          <div className="cart-item">
          <img src={imageProduct} alt="" className="cart-item__picture" />
          <h5 className="cart-item__title">Fall Limited Edition Sneakers $125.00 x {itemQty} <span className='bold'>${125*itemQty}.00</span></h5>
          <img 
                src={deleteIcon} 
                alt="delete-icon" 
                className="cart-item__delete-icon"
                onClick={() => {setItemQty(0)}}
          />
          </div>
        <button className="btn" id='btn-checkout'>Checkout</button>
        </div>}
        
        {itemQty === 0 && <p className='empty-cart'>Your cart is empty.</p>}
      </div>}
      
    </div>
     
    </>
  )
}

export default Cart;


