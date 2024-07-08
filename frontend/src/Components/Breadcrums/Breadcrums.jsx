import React from 'react'
import './Breadcrums.css'

export const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div>
        HOME <i className="fal fa-chevron-right"></i> SHOP <i className="fal fa-chevron-right"/>{product.name}
    </div>
  )
}
export default Breadcrums
