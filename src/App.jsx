import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import Checkout from "./components/pages/Checkout";
import PlaceOrder from "./components/pages/PlaceOrder";
import { useState, useEffect } from "react";
import { ROUTE_PATHS } from "./router/routePaths";

const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");

const App = () => {
  const [cartList, setCartList] = useState(cartLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const totalCartQuantity = cartList?.reduce(
    (total, item) => total + item?.quantity,
    0
  );

  const totalPrice = cartList.reduce(
    (total, product) => total + product?.quantity * product?.cost,
    0
  );

  const handleAddToCart = (product) => {
    setCartList((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      return existingProduct
        ? prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartList((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      return existingProduct.quantity === 1
        ? prevItems.filter((item) => item.id !== product.id)
        : prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
    });
  };

  const handleClearCart = () => {
    setCartList([]);
    localStorage.setItem("cartList", JSON.stringify([]));
  };

  const ex = {
    cartList, handleAddToCart, handleClearCart, handleRemoveFromCart, totalCartQuantity
  }

  return (
    <>
      <Routes>
        <Route path={ROUTE_PATHS.LOGIN_PAGE} element={<LoginPage />}></Route>
        <Route
          path={ROUTE_PATHS.DASHBOARD_PAGE}
          // element={
          //   <Dashboard
          //     cartList={cartList}
          //     handleAddToCart={handleAddToCart}
          //     handleClearCart={handleClearCart}
          //     handleRemoveFromCart={handleRemoveFromCart}
          //     totalCartQuantity={totalCartQuantity}
          //   />
          // }
          element={
            <Dashboard
              list={ex}
            />
          }
        ></Route>
        <Route
          path={ROUTE_PATHS.CHECKOUT_PAGE}
          element={
            <Checkout
              cartList={cartList}
              handleClearCart={handleClearCart}
              setCartList={setCartList}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              totalCartQuantity={totalCartQuantity}
              totalPrice={totalPrice}
            />
          }
        ></Route>
        <Route
          path={ROUTE_PATHS.PLACEHOLDER_PAGE}
          element={
            <PlaceOrder
              cartList={cartList}
              handleClearCart={handleClearCart}
              setCartList={setCartList}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              totalCartQuantity={totalCartQuantity}
              totalPrice={totalPrice}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
