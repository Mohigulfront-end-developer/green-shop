// import React from 'react'
// import Img1 from "../../../public/assets/plant1.png"
// import Img2 from "../../../public/assets/plant2.png";
// import Img3 from "../../../public/assets/plant3.png";
// import Img4 from "../../../public/assets/acceptedPayments.png";


// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (validate()) {
//     // Proceed with form submission
//     console.log("Form submitted:", formData);
//   }
// };

// const YourOrder = () => {
//   return (
//     <div className="">
//       <div className="container mx-auto px-4">
//         <h4 className="mb-6 text-2xl font-semibold text-gray-800">
//           Your Order
//         </h4>
//         <div className="flex items-center justify-between border-b-2 border-b-green-200 pb-4">
//           <p>Products</p>
//           <p>Subtotal</p>
//         </div>
//         <div className="my-5 flex items-center justify-between rounded-md bg-gray-50 p-4">
//           <img src={Img1} alt="" className="h-[75px] w-[75px]" />
//           <div className="">
//             <p className="text-[20px] font-bold text-[#3D3D3D]">
//               Barberton Daisy
//             </p>
//             <span className="py-2 text-[15px] font-normal text-[#3D3D3D]">
//               <span className="text-gray-400">SKU:</span> 1995751877966
//             </span>
//           </div>
//           <span className="text-[18px] font-normal text-[#3D3D3D]">(x 2)</span>
//           <span className="text-[20px] font-bold text-green-600">$238.00</span>
//         </div>
//         <div className="my-5 flex items-center justify-between rounded-md bg-gray-50 p-4">
//           <img src={Img2} alt="" className="h-[75px] w-[75px]" />
//           <div className="">
//             <p className="text-[20px] font-bold text-[#3D3D3D]">
//               Blushing Bromeli
//             </p>
//             <span className="py-2 text-[15px] font-normal text-[#3D3D3D]">
//               <span className="text-gray-400">SKU:</span> 19957518757065
//             </span>
//           </div>
//           <span className="text-[18px] font-normal text-[#3D3D3D]">(x 6)</span>
//           <span className="text-[20px] font-bold text-green-600">$834.00</span>
//         </div>
//         <div className="my-5 flex items-center justify-between rounded-md bg-gray-50 p-4">
//           <img src={Img3} alt="" className="h-[75px] w-[75px]" />
//           <div className="">
//             <p className="text-[20px] font-bold text-[#3D3D3D]">
//               Aluminum Plant
//             </p>
//             <span className="py-2 text-[15px] font-normal text-[#3D3D3D]">
//               <span className="text-gray-400">SKU:</span> 1995751877786
//             </span>
//           </div>
//           <span className="text-[18px] font-normal text-[#3D3D3D]">(x 9)</span>
//           <span className="text-[20px] font-bold text-green-600">
//             $1,611.00
//           </span>
//         </div>
//         <div className="mb-[50px] flex items-center justify-end">
//           <p>
//             Have a coupon code?{" "}
//             <span className="text-green-600">Click here</span>
//           </p>
//         </div>
//         <div className="">
//           <div className="flex items-center justify-between py-3">
//             <p className="text-[18px] font-normal text-[#3D3D3D]">Subtotal</p>
//             <h3 className="text-[20px] font-medium text-[#3D3D3D]">
//               $2,683.00
//             </h3>
//           </div>
//           <div className="flex items-center justify-between pb-3">
//             <p className="text-[18px] font-normal text-[#3D3D3D]">
//               Coupon Discount
//             </p>
//             <h3 className="text-[20px] font-normal text-[#3D3D3D]">
//               (-) 00.00
//             </h3>
//           </div>
//           <div className="flex items-center justify-between">
//             <p className="text-[18px] font-normal text-[#3D3D3D]">Shipping</p>
//             <h3 className="text-[20px] font-medium text-[#3D3D3D]">$16.00</h3>
//           </div>
//           <div className="flex justify-end pb-4 text-green-600">
//             <p className="text-[15px] font-normal">View shipping charge</p>
//           </div>
//           <div className="flex items-center justify-between border-t-2 border-t-green-200 py-4">
//             <h3 className="text-[20px] font-semibold">Total</h3>
//             <h3 className="text-[20px] font-semibold text-green-600">
//               $2,699.00
//             </h3>
//           </div>
//         </div>
//         <div className="">
//           <h4>Payment Method</h4>
//           <div className="mt-[20px] flex items-center gap-4 rounded-md border border-gray-200 px-4 py-4 hover:border-green-600">
//             <input type="radio" className="h-[15px] w-[15px]" />
//             <img src={Img4} alt="" className="" />
//           </div>
//           <div className="mt-[20px] flex items-center gap-4 rounded-md border border-gray-200 px-4 py-4 hover:border-green-600">
//             <input type="radio" className="h-[15px] w-[15px]" />
//             <label className="font-normal text-[#3D3D3D]">
//               Dorect bank transfer
//             </label>
//           </div>
//           <div className="mt-[20px] flex items-center gap-4 rounded-md border border-gray-200 px-4 py-4 hover:border-green-600">
//             <input type="radio" className="h-[15px] w-[15px]" />
//             <label className="font-normal text-[#3D3D3D]">
//               Cash on delivery
//             </label>
//           </div>
//         </div>
//         <div className="">
//           <button
//               type="submit"
//               onClick={handleSubmit}
//               className="rounded-md bg-green-600 px-5 py-3 text-lg text-white hover:bg-green-700"
//             >
//               Place Order
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourOrder