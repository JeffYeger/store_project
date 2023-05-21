import React from 'react'

import { useContext } from 'react'
import { StoreContext } from './StoreContext'
function Sidebar() {

    const {cartTotal, setCartTotal, setTotalProducts ,totalProducts} = useContext(StoreContext)
  return (
    <div onClick={()=>{
        setTotalProducts(totalProducts + 1)
        setCartTotal(cartTotal + 1)
    }}>Sidebar
        {cartTotal}{totalProducts}
        
    </div>
  )
}

export default Sidebar
