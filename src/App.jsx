import Navbar from './components/Navbar';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [itemQty, setItemQty] = useState(null);

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
