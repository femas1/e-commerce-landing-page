import cart from '../images/icon-cart.svg';


const Cart = ({ itemQty, setItemQty}) => {
  
    
    
    return (
    <>
     <a href="#" className="cart">
                <img src={cart} alt="" />
            </a> 
                <p>{itemQty}</p>
    </>
  )
}

export default Cart;

// 1. set quantity to 0
// 2. click on button and increase quantity based on number in input
