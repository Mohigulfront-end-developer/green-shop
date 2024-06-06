import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <div className="w-[370px]">
      <div className="">
        <h2 className="border-b-2 border-[#46A35880] pb-4 text-[20px] font-semibold">
          Cart Totals
        </h2>
        <div className="py-2">
          <p className="mb-[10px] text-gray-600">Coupon Apply</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="w-[280px] rounded-l-md border border-green-600 px-[15px] py-[10px] outline-none"
            />
            <button className="w-[90px] rounded-r-md bg-green-600 px-[20px] py-[11px] text-white">
              Apply
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="text-[15px] font-normal text-[#3D3D3D]">Subtotal</p>
          <h3 className="text-[18px] font-medium text-[#3D3D3D]">$2,683.00</h3>
        </div>
        <div className="flex items-center justify-between pb-2">
          <p className="text-[15px] font-normal text-[#3D3D3D]">
            Coupon Discount
          </p>
          <h3 className="text-[15px] font-normal text-[#3D3D3D]">(-) 00.00</h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-normal text-[#3D3D3D]">Shipping</p>
          <h3 className="text-[18px] font-medium text-[#3D3D3D]">$16.00</h3>
        </div>
        <div className="flex justify-end pb-2 text-green-600">
          <p className="text-[13px] font-normal">View shipping charge</p>
        </div>
        <div className="flex items-center justify-between py-2">
          <h3 className="text-[18px] font-semibold">Total</h3>
          <h3 className="text-[18px] font-semibold text-green-600">
            $2,699.00
          </h3>
        </div>
        <Link to={"/cart/checkout"}>
          <button className="mt-5 w-full rounded-md border bg-green-600 px-5 py-2 text-[18px] font-semibold text-white hover:border-green-600 hover:bg-transparent hover:text-green-600">
            Proceed To Checkout
          </button>
        </Link>
        <div className="flex items-center justify-center py-5">
          <button className="hover:text-green-600">
            <Link to={"/shop/1"}>Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
