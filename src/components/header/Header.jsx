// import React from 'react'
import Logo from "../../../public/assets/logo.svg";
import ShopBag from "../../../public/assets/shoppingC.svg";
import logout from "../../../public/assets/Logout.svg";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";





const Header = () => {
  const dispatch = useDispatch();
  const [isInputVisible, setIsInputVisible] = useState(false);

    const toggleInputVisibility = () => {
      setIsInputVisible(!isInputVisible);
    };

  return (
    <div className="lg:container mx-auto px-5 py-3 flex justify-between items-center border-b-2 border-gray-200">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex justify-between items-center list-none gap-10 ">
        <NavLink
          to={"/"}
          className="hover:text-green-600 pb-2 hover:border-b-[2px] link "
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop"}
          className="hover:text-green-600  pb-2 hover:border-b-green-600 hover:border-b-[2px]  link"
        >
          Shop
        </NavLink>
        <NavLink
          to={"/plant"}
          className="hover:text-green-600 pb-2 hover:border-b-green-600  hover:border-b-[2px]  link"
        >
          Plant Care
        </NavLink>
        <NavLink
          to={"/blog"}
          className="hover:text-green-600 pb-2 hover:border-b-green-600  hover:border-b-[2px]  active:border-b-2 link"
        >
          Blog
        </NavLink>
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="relative flex items-center gap-2">
          <CiSearch
            className="w-[25px] h-[25px] cursor-pointer"
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
              className="absolute mt-5 p-3 border border-green-600 text-sm rounded-lg outline-none w-[320px] text-gray-600 left-[-100px]"
              style={{ top: "100%" }} // Adjust the top positioning to place the input right below the icon
            />
          )}
        </div>

        <button>
          <img src={ShopBag} alt="" />
        </button>
        <button className="flex items-center gap-3 rounded-xl bg-green-600 px-5 py-2 text-white ">
          <img src={logout} alt="" />
          Login
        </button>
      </div>
    </div>
  );
}

export default Header