import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const SidebarTrack = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mt-[100px] flex w-[300px] flex-col bg-gray-100 py-4">
          <h4 className="mb-[10px] px-4 text-[20px] font-bold text-[#3D3D3D]">
            My Account
          </h4>
          <Link
            to={"/cart/checkout/track1"}
            className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600"
          >
            <CiUser />
            Account Details{" "}
          </Link>
          <Link
            to={"/cart/checkout/track2"}
            className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600"
          >
            <CiLocationOn />
            Address
          </Link>
          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <MdOutlineShoppingCart />
            Orders
          </Link>
          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <FaRegHeart /> Wishlist
          </Link>
          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <TbDeviceAnalytics />
            Reports
          </Link>
          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <CiSaveDown2 />
            Downloads
          </Link>
          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <CiWarning />
            Support
          </Link>

          <hr className="mb-[20px] text-green-300" />

          <Link className="flex items-center gap-2 px-4 py-3 text-[18px] hover:border-l-2 hover:border-l-green-600 hover:bg-white hover:text-green-600">
            <IoIosLogOut />
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarTrack