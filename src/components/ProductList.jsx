import React from 'react'
import ProductCard from './ProductCard'
import productData from '../products.json'

function ProductList({name}) {
  let products = productData.filter(product=> product.category == name)
   console.log (products)
    
  
  return (
    <div className='categoryTitle'>
    {/* <h1>{name}</h1> */}
    
   <div className='productCards'>
      
    {products.map((product)=>{
      return <div>
        <img className='productImages' src={product.image} alt="" />
      
        ${product.price}
     
        <button>Add To Cart</button>
      
        {product.title}

      </div>
    })}
      </div>
    </div>
  )
}

export default ProductList