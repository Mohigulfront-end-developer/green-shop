import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ProductDetailsHeader from './ProductDetailsHeader';
import CarouselProduct from './CarouselProduct';

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 py-10">
        <Link to={"/"}>Home</Link>/<NavLink to={"/shop"}>Shop</NavLink>
      </div>
      <ProductDetailsHeader />
      <CarouselProduct/>
    </div>
  );
}

export default ProductDetails