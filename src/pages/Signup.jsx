import React, { useState } from 'react';
import image from "./welcome.png";
import { Link } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'; // Import icons from react-icons
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    fname:'',
    lname:'',
    email: '',
    number:'',
    password: '',
    showPassword: false
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://rentify-server-rf0d.onrender.com/signup', values)
      .then(res => alert("Registered successfully"))
      .catch(err => console.log(err));
  }

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="basecolor pl-8 pr-8 flex-1 flex items-center justify-center " >
        <div className="md:w-2/4 bg-white p-8 rounded-lg shadow-md flex flex-col justify-center text-left">
          <h1 className='caption text-4xl mt-6 text-center mb-4'>Rentify</h1>
          <div className=" w-full text-left mb-7 mt-3">
            <h2 className="  text-lg lg:text-lg font-semibold mb-1">Signup</h2>
            <p className="text-sm lg:text-sm text-gray-700 font-normal">Enter your details to register.</p>
          </div>
          <form onSubmit={handleSubmit} className="mb-4">
            <label>First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="firstname"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
            />
            <label>Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="lasttname"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
            />
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
            />
            <label>Phone number:</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Phone number"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
            />

            <label>Password:</label>
            <div className="relative">
              <input
                type={values.showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                className="w-full px-3 py-2 mb-6 border border-gray-300 rounded"
              />
              {/* Eye icon to toggle password visibility */}
              <span className="absolute top-0 right-0 mt-2 mr-3" onClick={togglePasswordVisibility}>
                {values.showPassword ? (
                  <RiEyeOffFill className="h-6 w-6 cursor-pointer" />
                ) : (
                  <RiEyeFill className="h-6 w-6 cursor-pointer" />
                )}
              </span>
            </div>
            
            <div className='flex justify-center'>
              <button type="submit" className=" text-white font-semibold w-40 py-3 rounded" style={{ backgroundColor: 'black' }}>
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className='text-black  text-sm'>Already registered? <Link to="/login" className='font-semibold'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:flex md:flex-1 md:flex-col md:justify-center md:items-center">
        <img src={image} alt="" className="max-w-xl transition-transform transform hover:scale-105" />
      </div>
    </div>
  );
}

export default Signup;
