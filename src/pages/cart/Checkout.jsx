import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import YourOrder from "./YourOrder";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.street) newErrors.street = "Street Address is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "Zip is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 py-10 text-gray-600">
        <NavLink to="/" className="hover:text-green-600">
          Home
        </NavLink>
        <span>/</span>
        <Link to="/shop" className="hover:text-green-600">
          Shop
        </Link>
        <span>/</span>
        <NavLink to="/cart/checkout" className="hover:text-green-600">
          Checkout
        </NavLink>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="w-full lg:w-2/3">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Billing Address
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Country / Region<span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                >
                  <option value="" disabled>
                    Select a country / region
                  </option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="USA">USA</option>
                  <option value="England">England</option>
                  <option value="Germany">Germany</option>
                </select>
                {errors.country && (
                  <p className="text-sm text-red-500">{errors.country}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Town / City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city}</p>
                )}
              </div>
            </div>
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.street ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                  placeholder="House number and street name"
                />
                {errors.street && (
                  <p className="text-sm text-red-500">{errors.street}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Apartment, suite, unit, etc. (optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-5 py-3 outline-none"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
            </div>
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.state && (
                  <p className="text-sm text-red-500">{errors.state}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Zip <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.zip && (
                  <p className="text-sm text-red-500">{errors.zip}</p>
                )}
              </div>
            </div>
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-lg font-medium">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } px-5 py-3 outline-none`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="radio"
                id="shipToDifferentAddress"
                className="mr-2"
              />
              <label
                htmlFor="shipToDifferentAddress"
                className="text-lg font-medium"
              >
                Ship to a different address?
              </label>
            </div>
            <div className="flex flex-col">
              <label>Order notes (optional)</label>
              <textarea className="mt-5 h-[200px] w-[450px] rounded-sm border border-gray-200 px-5 py-2 outline-none"></textarea>
            </div>
            {/* <button
              type="submit"
              className="rounded-md bg-green-600 px-5 py-3 text-lg text-white hover:bg-green-700"
            >
              Place Order
            </button> */}
          </form>
        </div>
        <div className="mt-10 w-full lg:ml-10 lg:mt-0 lg:w-1/3">
          <YourOrder />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
