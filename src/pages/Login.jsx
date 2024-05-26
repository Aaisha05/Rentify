import React, { useState } from 'react';
import image from "./welcome.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://rentify-server-rf0d.onrender.com/login', values)
      .then((res) => {
        if (res.data.message === 'Login successful') {
          alert('Logged in successfully');
          localStorage.setItem("user",values.email)
          navigate('/who_are_you'); 
        } else {
          alert('Invalid credentials');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid credentials');
      });
  };
  


  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="basecolor pl-8 pr-8 flex-1 flex items-center justify-center " >
        <div className="md:w-2/4 bg-white p-8 rounded-lg shadow-md flex flex-col justify-center text-left">
        <h1 className='caption text-4xl mt-6 text-center mb-4 ' >Rentify</h1>
          <div className=" w-full text-left mb-7 mt-3">
            <h2 className="  text-lg lg:text-lg font-semibold mb-1">Login</h2>
            <p className="text-sm lg:text-sm text-gray-700 font-normal">Enter your credentials to login.</p>
          </div>
          <form onSubmit={handleSubmit} className="mb-4">
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
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mb-6 border border-gray-300 rounded"
            />
            <div className='flex justify-center'>
              <button type="submit" className=" text-white font-semibold w-40 py-3 rounded"style={{ backgroundColor: 'black' }}>
                Log In
              </button>
            </div>
            
            <div className="mt-4 text-center">
            <p className='text-black  text-sm'>Not registered yet? <Link to="/signup" className='font-semibold'>Sign Up</Link></p>
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

export default Login;