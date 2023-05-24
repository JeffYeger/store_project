import React from 'react'
import { Routes, Route } from 'react-router-dom'

function Product(props) {
  return (
    <Routes>
      <Route path = "/category/electronics" element = {<ProductCard/>}/>
    <div 
    
    className='productcard'>

      Shalom
      {props.image}
      {props.price}
      {props.addToCart}
      {props.description}
      
      
      
      </div>
      </Routes>
  )
}

export default Product