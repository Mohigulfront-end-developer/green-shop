// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./App.css"
import ProductDetails from "./pages/productDetails/ProductDetails";
// import Cart from "./components/Products/Cart";
import CartPage from "./pages/cart/CartPage";
import Checkout from "./pages/cart/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<CartPage />} /> 
        <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
