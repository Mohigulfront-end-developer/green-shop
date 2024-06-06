import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ProductDetailsHeader from './ProductDetailsHeader';
import CarouselProduct from './CarouselProduct';
import ProductDesc from './ProductDesc';

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 py-10">
        <Link to={"/"}>Home</Link>/<NavLink to={"/shop/1"}>Shop</NavLink>
      </div>
      <ProductDetailsHeader />
      <ProductDesc/>
      <div className="border-b-2 border-green-300 mt-[100px]">
        <h3 className='py-2 font-bold text-[22px]'>Related Products</h3>
      </div>
      <CarouselProduct/>
    </div>
    
  );
}

export default ProductDetails