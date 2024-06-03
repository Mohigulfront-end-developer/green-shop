import React from 'react'
import Img1 from "../../../../public/assets/plant.png"
import Img2 from "../../../../public/assets/cactus.png";
import Img3 from "../../../../public/assets/teapot.png";
import Container from "../../Container"

const FooterTop = () => {
  return (
    <Container>
      <div className="mt-[100px] bg-[#FBFBFB] py-5 flex justify-between items-center">
        <div className="px-8 border-r-2 border-tail-300 ">
          <img src={Img1} alt="plant logo" />
          <h4 className="font-semibold text-[18px] py-[20px]">Garden Care</h4>
          <p className="text-gray-500 mb-[20px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="px-8 border-r-2 border-tail-300 ">
          <img src={Img2} alt="plant logo" />
          <h4 className="font-semibold text-[18px] py-[20px]">
            Plant Renovation
          </h4>
          <p className="text-gray-500 mb-[20px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="px-8 mr-[50px]">
          <img src={Img3} alt="plant logo" />
          <h4 className="font-semibold text-[18px] py-[20px]">
            Watering Graden
          </h4>
          <p className="text-gray-500  mb-[20px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="px-8">
          <h4 className="font-semibold text-[20px] pb-[20px] text-start">
            Would you like to join newsletters?
          </h4>
          <div className="flex items-center mb-[40px]">
            <input
              type="text"
              className="w-[270px] px-5 py-4 rounded-l-lg outline-none "
              placeholder="Enter your email address.."
            />
            <button className=" px-5 py-4 rounded-r-lg bg-green-600 text-white">
              Join
            </button>
          </div>
          <p className="text-gray-500 mb-[10px]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default FooterTop