import React, {useContext} from 'react'
import {StoreContext} from './StoreContext'

function Header() {

    const {cartTotal, } = useContext(StoreContext)
  return (
    <div>
       <nav> <h1>Welcome To My Store {cartTotal}</h1></nav>
        </div>
  )
}

export default Header