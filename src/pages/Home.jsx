import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import herImg from "../../public/assets/hero-image.png";
import Button from "../components/Button";
import Products from "../components/Products/Products";
import Blogs from "../components/Blog/Blogs";
// import { useSelector } from "react-redux";


const Home = () => {

  return (
    <div className="container mx-auto">
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
        <SwiperSlide className=" mt-5 flex select-none items-center gap-[300px] bg-[#F5F5F5] px-16">
          <div>
            <h3 className="text-[14px] font-medium uppercase text-[#3D3D3D]">
              Welcome to Greenshop
            </h3>
            <h1 className="w-[600px] text-[70px] font-black uppercase text-[#3D3D3D]">
              Lets make a better <span className="text-green-600">planet</span>
            </h1>
            <p className="text-textSecondary w-[580px] text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes=" uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-blue-500 ">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
        <SwiperSlide className="mt-5 flex select-none items-center gap-[300px] bg-[#F5F5F5] px-16">
          <div>
            <h3 className="text-[0.875rem] font-medium uppercase text-[#3D3D3D]">
              Welcome to Greenshop
            </h3>
            <h1 className="w-[600px] text-[70px] font-black uppercase text-[#3D3D3D]">
              Lets make a better <span className="text-green-600">planet</span>
            </h1>
            <p className="text-textSecondary w-[580px] text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes="uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-blue-500">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
        <SwiperSlide className="mt-5 select-none flex items-center gap-[300px] bg-[#F5F5F5] px-16">
          <div>
            <h3 className="text-[0.875rem] font-medium uppercase text-[#3D3D3D]">
              Welcome to Greenshop
            </h3>
            <h1 className="w-[600px] text-[70px] font-black uppercase text-[#3D3D3D]">
              Lets make a better <span className="text-green-600">planet</span>
            </h1>
            <p className="text-textSecondary w-[580px] text-[0.875rem]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create a unique Urban Jungle.
              Order your favorite plants!
            </p>
            <Button classes="uppercase bg-green-600 text-white px-7 py-2 rounded mt-10 hover:bg-blue-500">
              shop now
            </Button>
          </div>
          <img src={herImg} alt="bunch of plants" />
        </SwiperSlide>
      </Swiper>
      <Products className="" />
      <Blogs />
    </div>
  );
};

export default Home;
