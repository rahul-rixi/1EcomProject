import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./features/products/ProductDetails";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import BestSeller from "./pages/BestSellers";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import ShopContextProvider from "./context/ShopContext";
// The page for product details

function App() {
  return (
    <Router>
      <ShopContextProvider>
      
      <Header/>
      <Routes>
  
        <Route path="/" element={<HomePage />} />

        <Route path='/bestseller' element={<BestSeller />} />
        
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<About/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/orders' element = {<Orders/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/place-order' element = {<PlaceOrder/>}/>


      </Routes>
      <Footer/>
      </ShopContextProvider>

    </Router>
  );
}

export default App;
