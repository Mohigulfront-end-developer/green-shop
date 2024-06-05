import React from 'react'
// import Container from "../../Container"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import Logo from "../../../../public/assets/logo.svg"

const FooterMid = () => {
  return (
    <div className="">
      <div className='container mx-auto px-4'>
        <div className="py-10  px-5 flex gap-20 items-center bg-green-50">
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <LocationOnOutlinedIcon className="text-green-600" />
            <p>
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex items-center gap-2">
            <EmailOutlinedIcon className="text-green-600" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="flex items-center gap-2">
            <WifiCalling3OutlinedIcon className="text-green-600" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMid