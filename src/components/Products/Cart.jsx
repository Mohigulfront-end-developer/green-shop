import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Cart = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className="my-[40px] flex h-[330px] w-[278px] cursor-pointer flex-col items-center gap-2 rounded-lg py-2 font-normal">
      <img
        src={image}
        alt=""
        onClick={() => navigate(`/shop/${id}`)}
        className="h-[300px] w-[255px] bg-[#FBFBFB] transition-all duration-500 ease-in-out hover:scale-110 hover:cursor-grab hover:border-t-2 hover:border-t-green-600"
      />
      <div className="flex flex-col gap-2">
        <h2 className="mt-[10px] text-[20px]">{name.slice(0, 30)}</h2>
        <div className="flex items-center gap-16">
          <p className="text-[20px] text-green-600">${price}</p>
          <div className="flex items-center justify-center gap-2">
            <button
              className="p-2"
              onClick={() => {
                dispatch(
                  addToCart({
                    id,
                    image,
                    name,
                    price,
                    qty: 1,
                  }),
                );
              }}
            >
              <ShoppingCartOutlined className="h-[25px] w-[25px] text-green-600 transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-grab" />
            </button>
            <button>
              <FavoriteBorder className="h-[25px] w-[25px] text-rose-600 transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-grab" />
            </button>
            <button>
              <Search className="h-[25px] w-[25px] text-gray-700 transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-grab" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
