import React, { useEffect, useState } from 'react'
import { Link, Routes } from 'react-router-dom'
import Products from '../products.json'



 


function CategoryCard(props) {




  return (
    <div className='categoryCard'
    >
      {props.name}
    
     </div>
  )
}

export default CategoryCard