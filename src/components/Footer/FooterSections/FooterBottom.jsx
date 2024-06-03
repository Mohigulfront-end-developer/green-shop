import React from "react";
import Container from "../../Container";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Payment from "../../../../public/assets/acceptedPayments.png"



const FooterBottom = () => {
  return (
    <div>
      <Container>
        <div className="p-8 bg-[#FBFBFB] flex justify-between items-center border-b-2 border-[#46A35899]">
          <div className="">
            <h4 className="font-semibold text-[20px]">My Account</h4>
            <ul>
              <li className="">My Account</li>
              <li className="">Our stores </li>
              <li className="">Contact Us</li>
              <li className="">Career</li>
              <li className="">Specials</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-[20px]">Help & Guide</h4>
            <ul>
              <li className="">Help Center </li>
              <li className="">How to Buy </li>
              <li className="">Shipping & Delivery</li>
              <li className="">Product Policy</li>
              <li className="">How to Return</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-[20px]">Categories</h4>
            <ul>
              <li className="">House Plants </li>
              <li className="">Potter Plants </li>
              <li className="">Seeds</li>
              <li className="">Small Plants</li>
              <li className="">Accessories</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-[20px]">Social Media</h4>
            <div className="flex items-center gap-2 my-[15px]">
              <button className="border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg">
                {" "}
                <FaFacebookF />
              </button>
              <button className="border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg">
                {" "}
                <IoLogoInstagram />
              </button>
              <button className="border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg">
                {" "}
                <FaTwitter />
              </button>
              <button className="border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg">
                {" "}
                <FaLinkedinIn />
              </button>
              <button className="border p-2 bg-transparent border-[#46A35899] text-[#46A35899] rounded-lg">
                {" "}
                <FaYoutube />
              </button>
            </div>
            <h4 className="font-semibold text-[20px] mb-[20px]">We accept</h4>
            <img src={Payment} alt="" />
          </div>
        </div>
        <div className="text-center p-4">
          <p>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
