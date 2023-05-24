import React from 'react'
import CategoryCard from './components/CategoryCard'
import Products from './products.json'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from './StoreContext'


function CategoryList() {
const {categories} = useContext (StoreContext)

  return (
    <div className='body'>
    
    {/* {categories.map((v)=>{
return <Link to = {`/category/${v}`}><CategoryCard name = {v}/></Link>
    })} */}
    <Link to="/electronics"><CategoryCard name = "electronics"/></Link>
    <Link to="/jewelry"><CategoryCard name = "jewelry"/></Link>
    <Link to="/mensclothing"><CategoryCard name = "mensclothing"/></Link>
    <Link to="/womensclothing"><CategoryCard name = "womensclothing"/></Link>
    
    </div>
  )
}

export default CategoryList

