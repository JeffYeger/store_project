import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import Sidebar from "./Sidebar";
import { StoreContext } from "./StoreContext";
import Products from "./products.json";
import './Body' 

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
 

  const [categories, setCategories] = useState([]);
  const tempCategories = categories;
  const [showProducts,setShowProducts] = useState()

  if (tempCategories.length == 0) {
    Products.forEach((product) => {
      if (!tempCategories.includes(product.category)) {
        tempCategories.push(product.category);
      }
    });
  }
  useEffect(() => {
    setShowProducts(
      Products.filter((product) => {
        return product.category == category, [category];
      })
    );
  });

  return (
    <>
      <StoreContext.Provider
        value={{
          cartTotal: cartTotal,
          setCartTotal: setCartTotal,
          totalProducts: totalProducts,
          setTotalProducts: setTotalProducts,
        }}
      >
       <div className="header">
          <h2>Welcome to my Store</h2>
          </div>
        <Sidebar />
        <div classname="body">
          <Routes>
            <Route path="/categories" element={<CategoryCard />} />
            <Route path="/*" element={<Products />} />
          </Routes>
        </div>
      </StoreContext.Provider>
    </>
  );
}

export default App;
