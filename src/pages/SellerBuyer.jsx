import React from 'react';
import { Link } from 'react-router-dom';
import image from './welcome.png'
//import image from './task.png';

function SellerBuyer() {
  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="basecolor pl-8 pr-8 flex-1 flex items-center justify-center " >
        
        <div className="lg:w-2/4 bg-white p-8 rounded-lg shadow-md flex flex-col justify-center text-center">
        <h1 className='caption text-4xl mt-6 ' >Rentify</h1>
          <div className=" w-full text-left mb-12 mt-5">
            <p className="text-sm text-center lg:text-base text-gray-700 font-normal">Choose the one that best defines you.</p>
          </div>
          <div>
              <div className="mb-12">
                <Link to="/sellerdash" type="submit" className="mybutton text-md py-4 px-20 rounded-3xl font-semibold text-md"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    transition: 'background-color 0.1s, color 0.1s', 
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2d2d2d';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'black';
                    e.target.style.color = 'white';
                  }}>Seller</Link>
              </div>

              <div className='mb-10'>
                <Link to="/buyerdash" type="submit" className="py-4 px-20 text-md rounded-3xl font-semibold text-md"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid black',
                    color: 'black',
                    transition: 'background-color 0.1s, color 0.1s', 
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'black';
                  }}>Buyer</Link>
              </div>
          </div>    
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:flex md:flex-1 md:flex-col md:justify-center md:items-center ">  
       <img src={image} alt="" className="max-w-xl transition-transform transform hover:scale-105" />
      </div>
    </div>
  );
}

export default SellerBuyer;