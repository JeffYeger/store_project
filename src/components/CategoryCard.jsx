import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from '../products.json'

function CategoryCard(props) {


  return (
    <div className='categoryCard'
    onClick={()=>{
      return    console.log ("jhjj")
   
    }
    }
    >
      {props.name}
     </div>
  )
}

export default CategoryCard