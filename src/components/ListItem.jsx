import React from 'react'
import ProductCard from './ProductCard'

function ListItem(showProducts) {
  return (
    <div>
      
      {showProducts.map((product)=><ProductCard product = {product.name})/}
    </div>
  )
}

export default ListItem