import React from 'react';

const QuantityInput = ({ inputValue, setInputValue}) => {

  const increaseValue = () => {
    setInputValue(Number(inputValue + 1))
  }

  const decreaseValue = () => {
    if(inputValue > 0){
    setInputValue(Number(inputValue -1, 0))
    }else return
  }



  return (
    <div className='quantity-input'>
        <button 
            className="btn" 
            id="decrease-btn"
            onClick={decreaseValue}
        >-</button>
        <input 
            type="number" 
            min={0} 
            value={inputValue}
            onChange={(e) => {setInputValue(Number(e.target.value))}}
         /> 
        <button 
              className="btn" 
              id="increase-btn"
              onClick={increaseValue}
        >+</button>
    </div>
  )
}

export default QuantityInput;
