import styles from './ProductImage.module.css';
import Thumbnail from '../Thumbnail/Thumbnail';

const ProductImage = () => {
  return (
    <>
        <img 
            src="src\assets\images\image-product-1.jpg" 
            alt="" 
            className={`img-fluid rounded ${styles.image}`}
          />
          <div className={styles.thumbnails}>
            {/* <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail /> */}
          </div>
          
    </>
  )
}

export default ProductImage;
