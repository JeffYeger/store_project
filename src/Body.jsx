import React from 'react'
import CategoryCard from './components/CategoryCard'
import Products from './products.json'

function Body() {

  let category = []
  let tempCategory = []
Products.map((v)=>{
  !category.includes(v.category)
  category.push(v.category)
})
{category.forEach((v)=>{
  if (!tempCategory.includes(v)){
    tempCategory.push(v)
  }
}) }

  return (
    <div className='body'>
    
    {tempCategory.map((v)=>{
return <CategoryCard name = {v}/>
    })}
    
    </div>
  )
}

export default Body