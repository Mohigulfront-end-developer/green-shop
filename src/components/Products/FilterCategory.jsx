import React from 'react'
import Slider from "@mui/material/Slider";
import SaleImg from "../../../public/assets/super-sale.png"

function valuetext(value) {
  return `${value}$`;
}


const FilterCategory = () => {
   const [value, setValue] = React.useState([20, 37]);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
  return (
    <div className="container mx-auto px-4">
      <div className="w-[320px] py-[10px] px-10 bg-[#FBFBFB] rounded-md">
        <h3 className="font-semibold text-[20px] pb-[10px]">Categories</h3>
        <div className="mb-[20px]">
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            House Plants
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Potter Plants
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Seeds
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Small Plants
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Big Plants
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Succulents
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Trerrariums
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Gardening
          </li>
          <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
            Accessories
          </li>
        </div>
        <div className="">
          <h3>Price Range</h3>
          <Slider
            getAriaLabel={() => "Price Range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <div className="flex flex-col gap-5">
            <span>
              Price: <span className="text-green-600">$39 - $1230</span>{" "}
            </span>
            <button className="w-[100px] text-white bg-green-600 px-4 py-2 rounded-md">
              Filter
            </button>
          </div>
          <h3 className="font-semibold text-[20px] mt-[25px] pb-[10px]">
            Size
          </h3>
          <div className="">
            <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
              Small
            </li>
            <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
              Medium
            </li>
            <li className="pb-[10px] font-normal text-[17px] list-none hover:text-green-600">
              Large
            </li>
          </div>
        </div>
      </div>
      <img src={SaleImg} alt="" className="w-[320px]" />
    </div>
  );
}

export default FilterCategory