import { useRef } from 'react';
import styles from './ItemInput.module.css';

const ItemInput = () => {
 
  const cartRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) =>{ 
      e.preventDefault();
      console.log(cartRef.current && cartRef.current.value)
    }

  return (
    <form onSubmit={handleSubmit} action="">

      <input 
          ref={cartRef} 
          min="0" 
          type="number" 
      />
      <button 
          className="btn btn-primary" 
          type="submit"
      >
            Add to cart
      </button>
    </form>
  )
}

export default ItemInput;

// User inputs the value in the number input
// User submits the value by clicking on the "add to cart" button
// Handle the (submit) click: when button is clicked the value is logged
// Take the value from the input and put it into an array in the cart component (as an object item, price, id, quantity)
// Show the number of items (objects) over the cart icon (=cart array length)