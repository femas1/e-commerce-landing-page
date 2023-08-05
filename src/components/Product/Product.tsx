import ProductImage from "../ProductImage/ProductImage";
import Thumbnail from "../Thumbnail/Thumbnail";
import styles from './Product.module.css';
import ProductInfo from "../ProductInfo/ProductInfo";
import ItemInput from "../ItemInput/ItemInput";

const Product = () => {
  return (
    <>
      <div className={`${styles.product} d-flex p-5 justify-content-center flex-wrap`}>

        <div className={`${styles.productImage}`}>
          <ProductImage />
          <div className={styles.thumbnails}>
            <Thumbnail source="src\assets\images\image-product-1-thumbnail.jpg" alt="product-nr-1"/>
            <Thumbnail source="src\assets\images\image-product-2-thumbnail.jpg" alt="product-nr-2"/>
            <Thumbnail source="src\assets\images\image-product-3-thumbnail.jpg" alt="product-nr-3"/>
            <Thumbnail source="src\assets\images\image-product-4-thumbnail.jpg" alt="product-nr-4"/>
          </div>
        </div>

        <ProductInfo 
            id={1} 
            label="Fall Limited Edition Sneakers" 
            brand="Sneaker Company" 
            description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer." 
            price={125} 
            discount={50}
        />
        </div>
      
    </>
  )
}

export default Product;