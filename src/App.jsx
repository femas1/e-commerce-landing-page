import Navbar from './components/Navbar';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [itemQty, setItemQty] = useState(0);

  return (
    <>
      <div className='app'> 
        <Navbar itemQty={itemQty} setItemQty={setItemQty}/>
        <ProductDetailPage itemQty={itemQty} setItemQty={setItemQty} />
             </div>
       </>
  )
}

export default App;
