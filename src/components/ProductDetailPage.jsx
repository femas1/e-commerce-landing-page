import React from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';


const ProductDetailPage = ({ itemQty, setItemQty}) => {
  return (
    <div className='product-detail-page'>
      <ProductImage />
      <ProductDescription itemQty={itemQty} setItemQty={setItemQty}/>

    </div>
  )
}

export default ProductDetailPage
