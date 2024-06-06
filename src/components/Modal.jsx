import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Modal = ({ modal, setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let formErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Proceed with login logic
      console.log("Logging in with", email, password);
    }
  };

  return (
    <div
      className={` ${
        modal ? "flex" : "hidden"
      } fixed left-0 top-0 z-40 h-full w-full items-start justify-center bg-[#000000b3] duration-300`}
    >
      <div
        className={`mx-4 mt-[2%] flex w-full flex-col rounded-md bg-white transition-all duration-500 lg:w-[500px]`}
      >
        <div className="">
          <div className="container mx-auto px-8 py-4">
            <div className="flex justify-end">
              <button
                onClick={() => setModal(false)}
                className="rotate-45 items-center text-[40px]"
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-center">
              <Link to={"/"}>
                <h4 className="border-r-2 border-gray-300 px-4 text-[20px] font-semibold hover:text-green-600">
                  Login
                </h4>
              </Link>
              <Link to={"/register"}>
                <h4 className="px-4 text-[20px] font-semibold text-[#3D3D3D] hover:text-green-600">
                  {" "}
                  Register
                </h4>
              </Link>
            </div>
            <div className="mt-[30px] flex flex-col items-center">
              <p className="mb-[10px] text-[18px] font-normal text-[#3D3D3D]">
                Enter your username and password to login.
              </p>
              <input
                type="text"
                placeholder="almamun_uxui@outlook.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[400px] rounded-md border border-gray-300 px-4 py-2 outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="my-2 w-[400px] rounded-md border border-gray-300 px-4 py-2 outline-none"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
              <div className="flex w-[400px] items-end justify-end">
                <NavLink to={"/"} className="text-[15px] text-green-600">
                  Forgot Password?
                </NavLink>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={handleLogin}
                  className="my-[20px] w-[400px] rounded-md border border-green-600 bg-transparent px-4 py-2 text-[18px] text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600">Or login with</p>
              </div>
              <div className="my-4">
                <button className="mb-[15px] flex w-[400px] items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:border-green-600">
                  <FcGoogle />
                  Login with Google
                </button>
                <button className="flex w-[400px] items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:border-green-600">
                  <FaFacebookF />
                  Login with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
