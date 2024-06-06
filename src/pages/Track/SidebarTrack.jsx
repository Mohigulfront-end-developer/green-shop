import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const SidebarTrack = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col mt-[100px] w-[200px]">

            <h4>My Account</h4>
            <Link to="/cart/checkout/track2">Account Details </Link>
            <Link>Address</Link>
            <Link>Orders</Link>
            <Link>Wishlist</Link>
            <Link>Reports</Link>
            <Link>Downloads</Link>
            <Link>Support</Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarTrack