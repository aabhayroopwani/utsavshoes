import React,{ useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
import Productf from '../Components/Productf/Productf';

export const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    // console.log(productId);
    const product = all_product.find((e)=> e.id === Number(productId));
    // console.log(product);
  return (
    <div>
        <Breadcrums product={product} />
        <Productdisplay product={product}/>
        <Productf/>
    </div>
  )
}

export default Product;

