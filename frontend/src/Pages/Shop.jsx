import React from 'react'
import { ShopBanner } from '../Components/ShopBanner/ShopBanner'
import { ShopProduct } from '../Components/Productf/ShopProduct'
import Pagination from '../Components/Pagination/Pagination'

export const Shop = () => {
  return (
    <div>
      <ShopBanner/>
      <ShopProduct/>
      <Pagination/>
    </div>
  )
}

export default Shop