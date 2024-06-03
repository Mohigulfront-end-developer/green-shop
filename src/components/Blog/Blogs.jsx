import React from 'react'
import EastIcon from "@mui/icons-material/East";
import Blog1 from "../../../public/assets/blog1.jpg"
import Blog2 from "../../../public/assets/blog2.jpg";
import Blog3 from "../../../public/assets/blog3.jpg";
import Blog4 from "../../../public/assets/blog4.jpg";
import Container from "../Container"



const Blogs = () => {
  return (
    <div>
      <Container className="container mx-auto px-4">
        <h2 className="font-bold text-[30px] text-center mt-20">Our Blogs</h2>
        <p className="text-center text-[20px] text-gray-500">
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </p>
        <div className="flex justify-center gap-20 items-center my-10">
          <div className="w-[270px] bg-[#FBFBFB] ">
            <img src={Blog1} alt="" />
            <span className="text-green-600 font-medium">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="font-bold text-[20px]">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="text-gray-500 py-[7px]">
              Cacti are succulents are easy care plants for any home or ratio
            </p>
            <button className="font-semibold hover:text-green-600 mb-[10px]">
              Read More <EastIcon />
            </button>
          </div>
          <div className="w-[270px] bg-[#FBFBFB]">
            <img src={Blog2} alt="" />
            <span className="text-green-600 font-medium">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="font-bold text-[20px]">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="text-gray-500 py-[7px]">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="font-semibold hover:text-green-600 mb-[10px]">
              Read More <EastIcon />
            </button>
          </div>
          <div className="w-[270px] bg-[#FBFBFB]">
            <img src={Blog3} alt="" />
            <span className="text-green-600 font-medium">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="font-bold text-[20px]">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="text-gray-500 py-[7px]">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="font-semibold hover:text-green-600 mb-[10px]">
              Read More <EastIcon />
            </button>
          </div>
          <div className="w-[270px] bg-[#FBFBFB]">
            <img src={Blog4} alt="" />
            <span className="text-green-600 font-medium">
              September 12 | Read in 6 minutes
            </span>
            <h4 className="font-bold text-[20px]">
              Cactus & Succulent <br /> Care Tips
            </h4>
            <p className="text-gray-500 py-[7px]">
              Cacti are succulents are esy care plants for any home or ratio
            </p>
            <button className="font-semibold hover:text-green-600 mb-[10px]">
              Read More <EastIcon />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Blogs