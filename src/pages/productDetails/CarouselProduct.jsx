import { Link } from "react-router-dom";
import {  FiHeart, FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import data from "../../utils/carouselCart"; // Import data from your utility file

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselProduct = () => {
  return (
    <div className="container mx-auto mt-[50px] px-4">
      <Carousel
        responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        className="pb-10"
      >
        {data.map((item) => (
          <div key={item.id} className="group relative">
            <img src={item.img} alt={`Plant ${item.id}`} className="h-auto" />
            <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="mb-4 flex translate-y-full transform space-x-4 transition-all duration-300 group-hover:translate-y-0">
                <Link
                  to="/shop/cart/"
                  className="rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white hover:text-green-600"
                >
                  <MdOutlineShoppingCart size={30} />
                </Link>
                <button className="rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white hover:text-red-700">
                  <FiHeart size={30} />
                </button>
                <button className="rounded-full bg-transparent p-2 text-white transition-colors hover:bg-white hover:text-blue-700">
                  <FiSearch size={30} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
