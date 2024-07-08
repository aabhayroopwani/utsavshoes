import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'

export const Cartitems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <section>
        <div id="Cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>remove</td>
                    <td>image</td>
                    <td>product</td>
                    <td>price</td>
                    <td>quantity</td>
                    <td>subtotal</td>
                </tr>
            </thead>
            <tbody>
            {
                all_product.map((e)=>{
                    
                    if(cartItems[e.id]>0)
                    {
                        return <tr>
                                    <td><i onClick={()=>{removeFromCart(e.id)}} className="far fa-times-circle"></i></td>
                                    <td><img src={e.image} alt=""/></td>
                                    <td>{e.name}</td>
                                    <td>{e.new_price}</td>
                                    <td><input type="number" value={cartItems[e.id]} id=""/></td>
                                    <td>{(e.new_price)*(cartItems[e.id])}</td>
                                </tr>
                    }
                    return null;
                })
            }
            </tbody>
        </table>
        </div>
        <div id="cart-add">
        <div id="coupon">
            <h3>apply coupon</h3>
            <div><input type="text" placeholder="enter your coupon"/>
                <button class="normal">Apply</button>
            </div>
        </div>
        <div id="subtotal">
            <h3>cart totals</h3>
            <table>
                <tr>
                    <td>cart subtotal</td>
                    <td>{getTotalCartAmount()}</td>
                </tr>
                <tr>
                    <td>shipping</td>
                    <td>free</td>
                </tr>
                <tr>
                    <td><strong>total</strong></td>
                    <td><strong>{getTotalCartAmount()}</strong></td>
                </tr>
            </table>
            <button class="normal">proceed to checkout</button>
        </div>
        </div>
    </section>
  )
}

export default Cartitems;
