import { useState } from 'react'
import data from "../../utils/data";
import Img1 from "../../../public/assets/plant2.png";
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci"; 

const ProductDetailsHeader = () => {
    const [count, setCount] = useState(1);
  const [image, setImage] = useState(Img1);
  const [name, setName] = useState("Barberton Daisy");
  const [price, setPrice] = useState("$119.00");
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const clicked1 = () => {
    setIsActive1(true) &
      setIsActive2(false) &
      setIsActive3(false) &
      setIsActive4(false);
  };
  const clicked2 = () => {
    setIsActive1(false) &
      setIsActive2(true) &
      setIsActive3(false) &
      setIsActive4(false);
  };
  const clicked3 = () => {
    setIsActive1(false) &
      setIsActive2(false) &
      setIsActive3(true) &
      setIsActive4(false);
  };
  const clicked4 = () => {
    setIsActive1(false) &
      setIsActive2(false) &
      setIsActive3(false) &
      setIsActive4(true);
  };

  const minusCount = () => {
    return setCount(count === 1 ? 1 : count - 1);
  };

  const plusCount = () => {
    return setCount(count + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-10">
        <div className="h-[480px] w-[300px] overflow-y-scroll">
          {data.map((item) => (
            <div className="" key={item.id}>
              <div
                className=""
                onClick={() =>
                  setImage(item.image) &
                  setName(item.name) &
                  setPrice(item.price)
                }
              >
                <img
                  src={item.image}
                  alt="item image"
                  className="mb-[10px] h-[150px] w-[280px] bg-gray-50"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <img src={image} alt="image" className="h-[500px] w-[750px]" />
        </div>
        <div className="">
          <div className="border-b-2">
            <h2 className="text-[25px] font-bold text-[#3D3D3D]">{name}</h2>
            <p className="py-2 text-[25px] font-bold text-green-600">{price}</p>
          </div>

          <h3 className="py-3 text-[22px] font-normal text-[#3D3D3D]">
            Short Description:
          </h3>
          <p className="text-[18px] font-light">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
          </p>
          <div className="">
            <h2 className="py-[20px] text-[18px] font-semibold text-[#3D3D3D]">
              Size:
            </h2>
            <div className="flex justify-start gap-5">
              <button
                style={{
                  background: isActive1 ? "#46A358" : "",
                  color: isActive1 ? "#fff" : "",
                }}
                onClick={clicked1}
                className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
              >
                S
              </button>
              <button
                style={{
                  background: isActive2 ? "#46A358" : "",
                  color: isActive2 ? "#fff" : "",
                }}
                onClick={clicked2}
                className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
              >
                M
              </button>
              <button
                style={{
                  background: isActive3 ? "#46A358" : "",
                  color: isActive3 ? "#fff" : "",
                }}
                onClick={clicked3}
                className="rounded-full border border-green-600 bg-transparent px-5 py-2 text-[18px] text-green-600"
              >
                L
              </button>
              <button
                style={{
                  background: isActive4 ? "#46A358" : "",
                  color: isActive4 ? "#fff" : "",
                }}
                onClick={clicked4}
                className="rounded-full border border-green-600 bg-transparent px-4 py-2 text-[18px] text-green-600"
              >
                XL
              </button>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-start gap-5">
            <button
              className="rounded-full border bg-green-600 p-2 px-4 text-center text-[18px] font-bold text-white"
              onClick={minusCount}
            >
              -
            </button>
            <p className="">{count}</p>
            <button
              className="rounded-full border bg-green-600 p-2 px-4 text-center text-[18px] font-bold text-white"
              onClick={plusCount}
            >
              +
            </button>
            <Link to={"/shop/cart"}>
              <button className="w-[130px] rounded border border-green-600 bg-transparent px-4 py-2 text-green-600 hover:bg-green-600 hover:text-white">
                BUY NOW
              </button>
            </Link>
            <button className="w-[130px] rounded-md border border-green-600 bg-transparent px-2 py-2 text-green-600 hover:bg-green-600 hover:text-white">
              ADD TO CARD
            </button>
            <button className="rounded-md border border-green-600 px-4 py-2 hover:border-rose-500">
              <FavoriteBorderOutlinedIcon className="text-green-600 hover:text-rose-500" />
            </button>
          </div>
          <div className="">
            <div className="my-5 text-[18px] text-[#3D3D3D]">
              Share this products:
            </div>
            <div className="flex items-center justify-start gap-4">
              <i>
                <FaFacebookF className="text-[20px] text-blue-600" />
              </i>
              <i>
                <FaTwitter className="text-[20px] text-blue-600" />
              </i>
              <i>
                <FaLinkedinIn className="text-[20px] text-blue-600" />
              </i>
              <i>
                <CiMail className="text-[20px] text-[#3D3D3D]" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsHeader