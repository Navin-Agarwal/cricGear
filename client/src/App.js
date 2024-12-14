import React from "react";
import ReactDOM from 'react-dom'
import { Cart } from "./Components/private/Cart";
import { ProductListing } from "./Components/ProductListingPage/ProductListing";
import { WishList } from "./Components/private/WishList";
import "./App.css";
import { ProductPage } from "./Components/ProductPage/ProductPage";


import { Navigation } from "./Components/nav";
import { Homepage } from "./Components/Homepage/Homepage";
import { Routes, Route } from "react-router";
import { Login } from "./Auth/Login";
import { PrivateRoute } from "./Components/private/PrivateRoute";
import SignUpPage from "./Auth/SignUpPage";

export default function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/products/:categoryName" element={<ProductListing />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<PrivateRoute/>}>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/wishlist' element={<WishList/>} />
          </Route>
      </Routes>
    </div>
  );
}
