// import React from 'react'
import Logo from "../../../public/assets/logo.svg";
import ShopBag from "../../../public/assets/shoppingC.svg";
import logout from "../../../public/assets/Logout.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const Header = ({setModal}) => {
  const dispatch = useDispatch();


  const [isInputVisible, setIsInputVisible] = useState(false);
    const { cart } = useSelector((cart) => cart.cart);
    console.log(cart, "cartpage for");

    const toggleInputVisibility = () => {
      setIsInputVisible(!isInputVisible);
    };

  return (
    <div className="container flex items-center justify-between border-b-2 border-gray-200 py-3">
      <div className="">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="flex list-none items-center justify-between gap-10">
        <NavLink
          to={"/"}
          className="link pb-2 hover:border-b-[2px] hover:text-green-600"
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop/1"}
          className="link pb-2 hover:border-b-[2px] hover:border-b-green-600 hover:text-green-600"
        >
          Shop
        </NavLink>
        <NavLink
          to={"/plant"}
          className="link pb-2 hover:border-b-[2px] hover:border-b-green-600 hover:text-green-600"
        >
          Plant Care
        </NavLink>
        <NavLink
          to={"/blog"}
          className="link pb-2 hover:border-b-[2px] hover:border-b-green-600 hover:text-green-600 active:border-b-2"
        >
          Blog
        </NavLink>
      </div>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <CiSearch
            className="h-[25px] w-[25px] cursor-pointer"
            onClick={toggleInputVisibility}
          />
          {isInputVisible && (
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Plants"
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="w-[320px] rounded-lg border border-green-600 p-3 text-sm text-gray-600 outline-none"
              // style={{ top: "100%" }} // Adjust the top positioning to place the input right below the icon
            />
          )}
        </div>

        <Link to={"/shop/cart"} className="relative">
          <img src={ShopBag} alt="" />
          {cart.length ? (
            <p className="absolute left-[22px] top-[-10px] rounded-full bg-green-600 px-[5px] text-white">
              {cart.length}
            </p>
          ) : (
            ""
          )}
        </Link>
        <button onClick={()=> setModal(true)} className="flex items-center gap-3 rounded-xl bg-green-600 px-5 py-2 text-white">
          <img src={logout} alt="" />
          Login
        </button>
      </div>
    </div>
  );
}

export default Header