import { useState } from "react";
import { Link } from "react-router-dom";


const RegistrTrack2 = () => {
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
    <div>
      <div className="container mx-auto px-4">
        <h4 className="mb-[10px] mt-[95px] text-2xl font-semibold text-gray-800">
          Billing Address
        </h4>
        <p className="mb-[15px] text-[18px] text-gray-600">
          The following addresses will be used on the checkout page by default.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium">
                <span className="text-red-500">*</span> First Name
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
                <span className="text-red-500">*</span> Last Name
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
                <span className="text-red-500">*</span> Country / Region
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
                <span className="text-red-500">*</span> Town / City
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
                <span className="text-red-500">*</span> Street Address
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
                <span className="text-red-500">*</span> State
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
                <span className="text-red-500">*</span> Zip
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
                <span className="text-red-500">*</span> Email address
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
                <span className="text-red-500">*</span> Phone Number
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
          <Link
            to={"/"}
            type={"submit"}
            className="rounded-md bg-green-600 px-5 py-3 text-lg text-white hover:bg-green-700"
          >
            Save Address
          </Link>
          <div className="mt-10 grid grid-cols-3 items-center gap-20">
            <div className="">
              <h4 className="text-[22px]">Shipping Address</h4>
              <p className="mt-[10px] text-gray-600">
                You have not set up this type of address yet.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="shipToDifferentAddress"
                className="h-[20px] w-[20px] text-green-600"
              />
              <label
                htmlFor="shipToDifferentAddress"
                className="text-lg font-medium"
              >
                Same as billing address
              </label>
            </div>
            <div className="">
              <Link to={"/"} className="text-[20px] text-green-600">
                Add
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrTrack2;
