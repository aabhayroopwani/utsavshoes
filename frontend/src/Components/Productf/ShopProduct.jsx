import React from 'react'
import all_product from '../Assets/all_products'
import './Productf.css'
import Item from '../Item/Item'

export const ShopProduct = () => {
  return (
    <section id="product1" className="section-p1">
        <div className="pro-container">
        {
            all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
        </div>
        <div className="pro-container">
        {
            all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
        </div>
    </section>
  )
}

export default ShopProduct;