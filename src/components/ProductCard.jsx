import React from 'react'

function Product(product,...props) {
  return (
    <div className='product'>
      <img classname = 'styles.product_img' src={product.image}/>
      <span></span>
      
      
      
      </div>
  )
}

export default Product