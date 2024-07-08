import React, { useContext } from 'react'
import './Productdisplay.css'
import p1_img from "../Assets/p1.png"
import p2_img from "../Assets/p2.png"
import p3_img from "../Assets/p3.png"
import p4_img from "../Assets/p4.png"
import p5_img from "../Assets/p5.png"
import p6_img from "../Assets/p6.png"
import p7_img from "../Assets/p7.png"
import p8_img from "../Assets/p8.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
            <img src={product.image} width="100%" id="MainImg" alt=""/>
            <div className="small-img-group">
                <div className="small-img-col">
                    <Link to={'./1'}><img src={p1_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./2'}><img src={p2_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./7'}><img src={p7_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./8'}><img src={p8_img} width="100%" className="small-img" alt=""/></Link>
                </div>
            </div>
            <div className="small-img-group">
                <div className="small-img-col">
                    <Link to={'./5'}><img src={p5_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./6'}><img src={p6_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./3'}><img src={p3_img} width="100%" className="small-img" alt=""/></Link>
                </div>
                <div className="small-img-col">
                    <Link to={'./4'}><img src={p4_img} width="100%" className="small-img" alt=""/></Link>
                </div>
            </div>
        </div>
        <div className="single-pro-details">
            <h4>{product.name}</h4>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h3>{product.old_price} Rs.</h3>
            <h2>{product.new_price} Rs.</h2>
            <select>
                <option>select size</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <input type='number' defaultValue={1}/>
            <button onClick={()=>{addToCart(product.id)}} className="normal">add to cart</button>
            <h4>product detais</h4>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptas quisquam incidunt recusandae 
                accusantium placeat nisi repudiandae, sed totam tempora maiores veritatis culpa, est dolorum nihil! 
                Error obcaecati dolores adipisci ea veniam accusantium harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rem modi culpa, minus asperiores quisquam laborum blanditiis sed ullam laudantium quod consequuntur ipsam, quam qui optio nisi iure.
                Quisquam, sequi commodi corrupti tempore consectetur nihil?</span>
        </div>
    </section>
  )
}

export default Productdisplay;