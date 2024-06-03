import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const Cart = ({ id, img, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(addToCart({ id, img, name, price, qty: 1 }));
      }}
      className="font-normal w-[300px] h-[330px] p-4 my-[30px] flex items-center flex-col rounded-lg gap-2 cursor-pointer"
    >
      <img
        src={img}
        alt=""
        className="bg-[#FBFBFB] w-[258px] h-[300px]   hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className=" flex gap-2 flex-col ">
        <h2 className="text-[20px] mt-[10px]">{name.slice(0, 30)}</h2>
        <p className="text-green-600 text-[20px]">${price}</p>
      </div>
    </div>
  );
};

export default Cart;
