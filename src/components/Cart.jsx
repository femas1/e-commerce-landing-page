import { useState } from 'react';
import cart from '../images/icon-cart.svg';


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
        Your cart is empty.
      </div>}
      
    </div>
     
    </>
  )
}

export default Cart;


