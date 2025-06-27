import React from 'react'
import Header from '../Header';
import SlideBar from '../SlideBar';

// const Dashboard = ({cartList, handleAddToCart, handleRemoveFromCart, totalCartQuantity, handleClearCart}) => {
//   return (
//     <>
//    <Header totalCartQuantity={totalCartQuantity} handleClearCart={handleClearCart}/>
//    <SlideBar cartList={cartList} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
//     </>
//   )
// }

const Dashboard = ({list:{cartList, handleAddToCart, handleRemoveFromCart, totalCartQuantity, handleClearCart}}) => {
  return (
    <>
   <Header totalCartQuantity={totalCartQuantity} handleClearCart={handleClearCart}/>
   <SlideBar cartList={cartList} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
    </>
  )
}

export default Dashboard
