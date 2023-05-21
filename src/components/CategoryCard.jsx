import React, { useState } from 'react'
import Products from '../products.json'

function CategoryCard() {
const [categories,setCategories] = useState([])
const tempCategories = categories

if (tempCategories.length == 0){
  Products.forEach((product)=>{
    if (!tempCategories.includes(product.category)){
      tempCategories.push(product.category)
    }
  })
}


  return (
    <div>CategoryCard</div>
  )
}

export default CategoryCard