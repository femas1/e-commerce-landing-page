import styles from "./ProductInfo.module.css";
import ItemInput from "../ItemInput/ItemInput";

interface Props {
  brand: string,
  label: string,
  description: string
  price: number, 
  salePrice?: number,
  discount: number,
  id: number
}

const ProductInfo = ({brand, label, description, price, salePrice, discount, id}: Props) => {
  
  
  
  return (
    <div key={id} className={`${styles.productInfo} p-5`}>
      <h4>{brand}</h4>
      <h1>{label}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <p>{discount}%</p>
      <p>${salePrice}</p>
      <ItemInput/>
    </div>
  )
}

export default ProductInfo;
