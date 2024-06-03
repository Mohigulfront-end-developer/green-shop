import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import herImg from "../../public/assets/hero-image.png";
import Button from "../components/Button";
import Products from "../components/Products/Products";
import Blogs from "../components/Blog/Blogs";


const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none">
          <div>
            <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
              Welcome to Greenshop
            </h3>
            <h1 className="uppercase font-black text-[4.375rem] text-textPrimary">
              Let's make a better <span className="text-primary">planet</span>
            </h1>
            <p className="text-textSecondary text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes="uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none ">
          <div>
            <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
              Welcome to Greenshop
            </h3>
            <h1 className="uppercase font-black text-[4.375rem] text-textPrimary">
              Let's make a better <span className="text-primary">planet</span>
            </h1>
            <p className="text-textSecondary text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes="uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none">
          <div>
            <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
              Welcome to Greenshop
            </h3>
            <h1 className="uppercase font-black text-[4.375rem] text-textPrimary">
              Let's make a better <span className="text-primary">planet</span>
            </h1>
            <p className="text-textSecondary text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes="uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
      </Swiper>
      <Products/>
      <Blogs/>
    </div>
  );
};

export default Home;
