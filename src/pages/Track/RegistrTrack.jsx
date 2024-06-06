import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrTrack = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    newpassord: "",
    confirmpassword: "",
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
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password  is required";
    if (!formData.newpassord) newErrors.newpassord = "New Password is required";
    if (!formData.confirmpassword) newErrors.confirmpassword = "Confirm Password is required";
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
          Personal Information
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
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
                className={`w-[417px] rounded-md border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium">
                Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.username}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <label>Photo</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  className=""
                />
              </div>
              <div className="flex items-center">
                <h4></h4>
                <Link className="mr-[20px] hover:text-green-600">Change</Link>
                <Link className="mr-[30px] hover:text-green-600">Remove</Link>
              </div>
            </div>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium">
                Current password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="mb-5">
            <div>
              <label className="mb-2 block text-lg font-medium">
                New password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="newpassword"
                value={formData.newpassword}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.newpassword ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.newpassword && (
                <p className="text-sm text-red-500">{errors.newpassword}</p>
              )}
            </div>
            <div className="mb-[30px]">
              <label className="mb-2 block text-lg font-medium">
                Confirm new password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                className={`w-[417px] rounded-md border ${
                  errors.confirmpassword ? "border-red-500" : "border-gray-300"
                } px-5 py-3 outline-none`}
              />
              {errors.confirmpassword && (
                <p className="text-sm text-red-500">{errors.confirmpassword}</p>
              )}
            </div>
          </div>
          <Link
            to={"/cart/checkout/track2"}
            type="submit"
            className="rounded-md bg-green-600 px-5 py-3 text-lg text-white hover:bg-green-700"
          >
            Save Change
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegistrTrack