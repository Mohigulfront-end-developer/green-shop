import FilterCategory from "./FilterCategory"
import Sort from './Sort'
import ProductList from './ProductList'
import Img1 from "../../../public/assets/plant14.png"
import Img2 from "../../../public/assets/plant12.png";
import EastIcon from "@mui/icons-material/East";


const Products = () => {
  return (
    <div className="mb-[50px]">
      <div className="container mx-auto px-4 flex  mt-[20px]">
        <div className=" grid grid-cols-1">
          <FilterCategory />
        </div>
        <div className="">
          <div className="">
            <Sort />
          </div>
          <div className="">
            <ProductList />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-5">
          <div className="p-5 w-[700px] h-[250px] bg-[#FBFBFB] flex justify-between items-center rounded-md">
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
          <div className="w-[700px] h-[256px] bg-[#FBFBFB] flex justify-between items-center p-5 rounded-md">
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