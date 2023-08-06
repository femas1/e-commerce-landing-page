import React from 'react';
import { useState } from 'react';
import FsLightbox from "fslightbox-react";

import imageOne from '../images/image-product-1.jpg'
import thumbnailOne from '../images/image-product-1-thumbnail.jpg'
import imageTwo from '../images/image-product-2.jpg'
import thumbnailTwo from '../images/image-product-2-thumbnail.jpg'
import imageThree from '../images/image-product-3.jpg'
import thumbnailThree from '../images/image-product-3-thumbnail.jpg'
import imageFour from '../images/image-product-4.jpg'
import thumbnailFour from '../images/image-product-4-thumbnail.jpg'

const ProductImage = () => {

  const [toggler, setToggler] = useState(false);

  return (
    <div className='product-image'>
      <div className="images">
        <div className="main">
            <img 
                  src={imageOne} 
                  alt="" 
                  className="main-img"
                  onClick={() => setToggler(!toggler)}
           />
           <FsLightbox
				toggler={toggler}
				sources={[
            imageOne,
            imageTwo,
            imageThree,
            imageFour
				]}
			/>
        </div>
        <div className="thumbnails">
            <img src={thumbnailOne} alt="" className="thumbnail-1" />
            <img src={thumbnailTwo} alt="" className="thumbnail-2" />
            <img src={thumbnailThree} alt="" className="thumbnail-3" />
            <img src={thumbnailFour} alt="" className="thumbnail-4" />
        </div>
      </div>
    </div>
  )
}

export default ProductImage;
