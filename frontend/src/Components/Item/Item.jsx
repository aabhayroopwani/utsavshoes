import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
      <div className="pro">
        <Link to={`/product/${props.id}`} ><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
        <div className="des">
            <span>adidas</span>
            <h5>{props.name}</h5>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h4 className='old-price'>{props.old_price}</h4>
            <h4 className='new-price'>{props.new_price}</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart" id="cart"></i></a>
    </div>
  )
}

export default Item