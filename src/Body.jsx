import React from 'react'
import {Routes,Route} from "react-router-dom"
import CategoryList from './CategoryList'
import { useContext } from 'react'
import { StoreContext } from './StoreContext'
import CategoryCard from './components/CategoryCard'
import ProductList from './components/ProductList'


function Body() {

const {categories} = useContext(StoreContext)
    return (
        <div 
         className='body'>
           
            <Routes>
                <Route path="/" element={<CategoryList />} />
                <Route path="/electronics" element={<ProductList name = "electronics"/>} />
                <Route path="/jewelry" element={<ProductList name = "jewelry" />} />
                <Route path="/mensclothing" element={<ProductList name = {'mensclothing'} />} />
                <Route path="/womensclothing" element={<ProductList name = {'womensclothing'} />} />
                {/* {categories.map ((v)=>{
                    return <Route path={`/categories/${v}`} element={<ProductList category = {v}/>} /> */}
                {/* })} */}
                
                
                

            </Routes>

           

        </div>
    )
}

export default Body