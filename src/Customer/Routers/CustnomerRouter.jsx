import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/homepage"; // Correct import path for Homepage component
import Cart from "../components/Cart/Cart";
import Product from "../components/Procducts/Product"; // Correct import path for Product component
import ProductDetails from "../components/ProductDetails/ProductDetails"; // Correct import path for ProductDetails component
import Checkout from "../components/checkout/checkout"; // Correct import path for Checkout component
import OrderDetails from "../components/OrderPage/OrderDetails";
import OrderPage from "../components/OrderPage/OrderPage";

const CustomerRouter = () => {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Homepage />} ></Route>
      <Route path="/register" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<OrderPage />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
    </div>
  );
};

export default CustomerRouter;
