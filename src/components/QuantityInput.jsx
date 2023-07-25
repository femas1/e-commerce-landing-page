import React from 'react';

const QuantityInput = ({ inputValue, setInputValue}) => {
  return (
    <>
        <input 
            type="number" 
            min={0} 
            value={inputValue}
            onChange={(e) => {setInputValue(Number(e.target.value))}}
         /> 
    </>
  )
}

export default QuantityInput;
