import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Payment from "../../../../public/assets/acceptedPayments.png"



const FooterBottom = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between border-b-2 border-[#46A35899] bg-[#FBFBFB] p-8">
          <div className="">
            <h4 className="text-[20px] font-semibold">My Account</h4>
            <ul>
              <li className="hover:text-green-600">
                <a href="#">My Account</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Our stores</a>{" "}
              </li>
              <li className="hover:text-green-600">
                <a href="#">Contact Us</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Career</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Specials</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[20px] font-semibold">Help & Guide</h4>
            <ul>
              <li className="hover:text-green-600">
                <a href="#">Help Center</a>{" "}
              </li>
              <li className="hover:text-green-600">
                <a href="#">How to Buy</a>{" "}
              </li>
              <li className="hover:text-green-600">
                <a href="#">Shipping & Delivery</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Product Policy</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">How to Return</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[20px] font-semibold">Categories</h4>
            <ul>
              <li className="hover:text-green-600">
                <a href="#">House Plants</a>{" "}
              </li>
              <li className="hover:text-green-600">
                <a href="#">Potter Plants</a>{" "}
              </li>
              <li className="hover:text-green-600">
                <a href="#">Seeds</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Small Plants</a>
              </li>
              <li className="hover:text-green-600">
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-[20px] font-semibold">Social Media</h4>
            <div className="my-[15px] flex items-center gap-2">
              <button className="rounded-lg border border-[#46A35899] bg-transparent p-2 text-[#46A35899]">
                {" "}
                <FaFacebookF />
              </button>
              <button className="rounded-lg border border-[#46A35899] bg-transparent p-2 text-[#46A35899]">
                {" "}
                <IoLogoInstagram />
              </button>
              <button className="rounded-lg border border-[#46A35899] bg-transparent p-2 text-[#46A35899]">
                {" "}
                <FaTwitter />
              </button>
              <button className="rounded-lg border border-[#46A35899] bg-transparent p-2 text-[#46A35899]">
                {" "}
                <FaLinkedinIn />
              </button>
              <button className="rounded-lg border border-[#46A35899] bg-transparent p-2 text-[#46A35899]">
                {" "}
                <FaYoutube />
              </button>
            </div>
            <h4 className="mb-[20px] text-[20px] font-semibold">We accept</h4>
            <img src={Payment} alt="" />
          </div>
        </div>
        <div className="p-4 text-center">
          <p>© 2021 GreenShop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
