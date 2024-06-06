// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../components/redux/slices/CartSlice";
import { DeleteOutline } from "@mui/icons-material";
import Basket from "./Basket";
import { Link, NavLink } from "react-router-dom";
import CarouselProduct from "../productDetails/CarouselProduct";

const CartPage = (product, state, className) => {
  const { cart } = useSelector((cart) => cart.cart);
  const dispatch = useDispatch();
  // console.log(cart, "cartpage for");

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
    // console.log('hi');
  };
  return (
    <div className="container">
      {" "}
      <div className="flex items-center gap-4 py-10">
        <NavLink to={"/"}>Home</NavLink>/<Link to={"/shop/1"}>Shop</Link>/
        <NavLink to={"/shop/cart"}>Shopping Cart</NavLink>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="w-[900px]">
          <div className="grid grid-cols-5 border-b-2 border-b-gray-300 pb-5 text-[18px] text-[#3D3D3D]">
            <h2 className="">Products</h2>
            <h2 className="">Price</h2>
            <h2 className="">Quantity</h2>
            <h2 className="">Total</h2>
            <h2></h2>
          </div>

          <div className="mt-5 grid max-h-[450px] grid-cols-1 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-5 max-h-[100px] grid grid-cols-6 items-center bg-gray-50 pr-[20px]"
              >
                <div className="mr-[20px]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[100px] w-[100px]"
                  />
                </div>
                <div className="mr-[20px] px-4">
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
                <div className="mr-[20px] px-4">
                  <p>{item.price}</p>
                </div>
                <div className="flex items-center justify-center gap-2 px-2">
                  <button
                    onClick={() => decrementQty()}
                    className="rounded-full border bg-green-600 px-3 text-[20px] text-white hover:border-green-600 hover:bg-white hover:text-green-600"
                  >
                    -
                  </button>
                  <p>{item.qty}</p>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="rounded-full border bg-green-600 px-3 text-[20px] text-white hover:border-green-600 hover:bg-white hover:text-green-600"
                  >
                    +
                  </button>
                </div>
                <div className="">
                  <h4>{item.qty * item.price}</h4>

                  {/* <p>{cart.length}</p> */}
                </div>
                <div className="flex justify-center">
                  <button onClick={() => handleRemove(item.id)}>
                    <DeleteOutline className="cursor-pointer text-gray-700 hover:text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Basket />
      </div>
      <div className="mt-[100px] border-b-2 border-[#46A35880]">
        <h3 className="py-2 font-bold text-green-600">
          You may be interested in
        </h3>
      </div>
      <CarouselProduct/>
    </div>
  );
};
export default CartPage;
