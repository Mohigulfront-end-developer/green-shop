import React from 'react'
import EastIcon from "@mui/icons-material/East";
import Blog1 from "../../../public/assets/blog1.jpg"
import Blog2 from "../../../public/assets/blog2.jpg";
import Blog3 from "../../../public/assets/blog3.jpg";
import Blog4 from "../../../public/assets/blog4.jpg";
// import Container from "../../utils/Container"



const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <h2 className="mt-20 text-center text-[30px] font-bold">Our Blogs</h2>
        <p className="text-center text-[20px] text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </p>
        <div className="my-10 flex items-center justify-center gap-14">
          <div className="w-[330px] bg-[#FBFBFB]">
            <img src={Blog1} alt="" />
            <div className="px-4">
              <span className="font-medium text-green-600">
                September 12 | Read in 6 minutes
              </span>
              <h4 className=" text-[20px] font-bold">
                Cactus & Succulent <br /> Care Tips
              </h4>
              <p className=" py-[7px] text-gray-500">
                Cacti are succulents are easy care plants for any home or ratio
              </p>
              <button className="mb-[10px] font-semibold hover:text-green-600">
                Read More <EastIcon />
              </button>
            </div>
          </div>
          <div className="w-[330px] bg-[#FBFBFB]">
            <img src={Blog2} alt="" />
            <div className="px-4">
            <span className="font-medium text-green-600">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="text-[20px] font-bold">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="py-[7px] text-gray-500">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="mb-[10px] font-semibold hover:text-green-600">
              Read More <EastIcon />
            </button>

            </div>
          </div>
          <div className="w-[330px] bg-[#FBFBFB]">
            <img src={Blog3} alt="" />
            <div className="px-4">
            <span className="font-medium text-green-600">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="text-[20px] font-bold">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="py-[7px] text-gray-500">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="mb-[10px] font-semibold hover:text-green-600">
              Read More <EastIcon />
            </button>

            </div>
          </div>
          <div className="w-[330px] bg-[#FBFBFB]">
            <img src={Blog4} alt="" />
            <div className="px-4">
            <span className="font-medium text-green-600">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="text-[20px] font-bold">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="py-[7px] text-gray-500">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="mb-[10px] font-semibold hover:text-green-600">
              Read More <EastIcon />
            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs