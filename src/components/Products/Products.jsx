import FilterCategory from "./FilterCategory"
import Sort from './Sort'
import ProductList from './ProductList'
import Img1 from "../../../public/assets/plant14.png"
import Img2 from "../../../public/assets/plant12.png";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";


const Products = () => {
  const [count , setCount] = useState([])
  const [show , setShow] = useState(true)
  

  console.log(count);
  return (
    <div className="container mx-auto px-4 my-[30px]">
      <div className="flex  mt-[20px]">
        <div className=" grid grid-cols-1 mr-[40px]">
          <FilterCategory setCount={setCount} setShow={setShow} />
        </div>
        <div className="">
          <div className="">
            <Sort />
          </div>
          <div className="">
            <ProductList count={count} show={show} />
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center gap-16">
          <div className="p-5 w-[800px] h-[250px] bg-[#FBFBFB] flex justify-between items-center rounded-md">
            <img src={Img1} alt="" className="mt-[-70px]  " />
            <div className="text-right">
              <h2 className="font-bold text-[23px]">
                SUMMER CACTUS & SUCCULENTS
              </h2>
              <p className="text-[18px]">
                We are an online plan shop offering a wide range of cheap and
                trendy plants
              </p>
              <div className="flex justify-end mt-4">
                {" "}
                {/* Added a div with flex justify-end */}
                <button className="px-3 py-2 flex items-center gap-2 rounded-lg bg-green-600 text-white">
                  Find More <EastIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[800px] h-[256px] bg-[#FBFBFB] flex justify-between items-center p-5 rounded-md">
            <img src={Img2} alt="" className="mt-[-70px]" />
            <div className="text-right">
              <h2 className="font-bold text-[23px]">
                SUMMER CACTUS & SUCCULENTS
              </h2>
              <p className="text-[18px]">
                We are an online plan shop offering a wide range of cheap and
                trendy plants
              </p>
              <div className="flex justify-end mt-4">
                {" "}
                {/* Added a div with flex justify-end */}
                <button className="px-3 py-2 flex items-center gap-2 rounded-lg bg-green-600 text-white">
                  Find More <EastIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products