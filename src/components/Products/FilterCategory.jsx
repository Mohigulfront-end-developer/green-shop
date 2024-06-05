import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import SaleImg from "../../../public/assets/super-sale.png";
import Data from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";

function valuetext(value) {
  return `${value}$`;
}

const FilterCategory = ({ setCount, setShow }) => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(Data.map((plants) => plants.category)),
    ];
    setCategories(uniqueCategories);
    // console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const HandleClick = (e) => {
    setCount([e.target.textContent]);
    setShow(false);
  };

  return (
    <div className="">
      <div className="container mx-auto w-[320px] rounded-md bg-[#FBFBFB] px-10 py-[10px]">
        <h3 className="pb-[10px] text-[20px] font-semibold">Categories</h3>
        <div className="mb-[20px]">
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            House Plants
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Potter Plants
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Seeds
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Small Plants
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Big Plants
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Succulents
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Trerrariums
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Gardening
          </li>
          <li
            className="cursor-pointer list-none pb-[10px] text-[17px] font-normal hover:text-green-600"
            onClick={HandleClick}
          >
            Accessories
          </li>
        </div>
        {/* <div className="my-5 flex flex-col gap-2">
          {categories.map((category, index) => {
            return (
              <div
                className={`border-b-[2px] ${
                  selectedCategory === category
                    ? "border-b-[#EA7C69] text-black"
                    : " border-b-[#fff0]"
                } categoryFilter pb-3 `}
                key={index}
              >
                <button
                  onClick={() => dispatch(setCategories(category))}
                  className={` py-2  font-bold  ${
                    selectedCategory === category
                      ? "text-[#EA7C69]"
                      : "rounded-lg hover:border-b-[#EA7C69] text-[black]"
                  }`}
                >
                  {category.slice(0, 30)}
                </button>
              </div>
            );
          })}
        </div> */}
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
            <button className="w-[100px] rounded-md bg-green-600 px-4 py-2 text-white">
              Filter
            </button>
          </div>
          <h3 className="mt-[25px] pb-[10px] text-[20px] font-semibold">
            Size
          </h3>
          <div className="">
            <li className="list-none pb-[10px] text-[17px] font-normal hover:text-green-600">
              Small
            </li>
            <li className="list-none pb-[10px] text-[17px] font-normal hover:text-green-600">
              Medium
            </li>
            <li className="list-none pb-[10px] text-[17px] font-normal hover:text-green-600">
              Large
            </li>
          </div>
        </div>
      </div>
      <img src={SaleImg} alt="" className="mx-auto w-[320px] container" />
    </div>
  );
};

export default FilterCategory;
