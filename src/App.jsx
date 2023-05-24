import { useContext, useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import Sidebar from "./Sidebar";
import { StoreContext } from "./StoreContext";
import Products from "./products.json";
import './CategoryList' 
import Header from "./Header";
import Body from "./Body";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
 let categories = []
  let tempCategories = []
Products.map((v)=>{
  !tempCategories.includes(v.category)
  tempCategories.push(v.category)
})
{tempCategories.forEach((v)=>{
  if (!categories.includes(v)){
    categories.push(v)
  }
}) }
 
  return (
    <>
  <div className="maindiv">
      <StoreContext.Provider
        value={{
          cartTotal: cartTotal,
          setCartTotal: setCartTotal,
          totalProducts: totalProducts,
          setTotalProducts: setTotalProducts,
          categories,
        }}
      >
       <Header/>
       <div className="bodydiv">
        <Sidebar/>
        <div className="content">
        <Body/>
        </div>
        </div>
        
      </StoreContext.Provider>
      </div>
    </>
  );
}

export default App;
