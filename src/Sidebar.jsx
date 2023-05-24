import React from 'react'
import Products from './products.json'
import { useContext } from 'react'
import { StoreContext } from './StoreContext'
function Sidebar() {



    const {cartTotal, setCartTotal, setTotalProducts ,totalProducts} = useContext(StoreContext)
  return (

    <div className='sidebar' onClick={()=>{
        setTotalProducts(totalProducts + 1)
        setCartTotal(cartTotal + 1)
    }}>Sidebar
        {cartTotal}and {totalProducts}
        
    </div>
  )
}

export default Sidebar

