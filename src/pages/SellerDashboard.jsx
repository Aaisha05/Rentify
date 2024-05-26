import React, { useState } from 'react';
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import image4 from "./homeimage.png";
import axios from 'axios';
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom';

function SellerDashboard() {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    image:'',
    no_of_bedrooms: '',
    no_of_bathrooms: '',
    
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };






  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/sellerform', formData)
      .then(res => alert("Crafted your site!"))
      .catch(err => console.log(err));
  };

  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar />
      <div className='mb-[10rem] justify-between flex lg:mt-20 mt-40 max-md:flex-col'>
        <div className='flex justify-between max-md:flex-col'>
          <div className='text-center'>
            <h2 className="caption lg:text-6xl text-4xl mb-4 ml-40 mt-[10rem] max-md:mt-0 max-md:ml-0">Craft your Site now!</h2>
            <h2 className="text-4xl mb-12 font-light text-center max-md:ml-0 max-md:text-2xl" style={{ color: "#464545" }}>Let the world know you!</h2>
            <div className='flex justify-center w-full items-center'>
              <div className='flex justify-center mr-40 mb-10 ml-[9rem]'>
                <Link to="/about" className="text-md py-4 px-20 rounded-3xl font-semibold text-md whitespace-nowrap"
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
                  }}>Know us better</Link>
              </div>
            </div>
            <p className='text-xl px-10 text-gray-700 font-light'>Your local services directory</p>
          </div>
          <div className='mt-16 flex justify-center lg:justify-end'>
            <div className="flex items-center justify-center lg:w-[70%] lg:mr-[15%]">
              <img src={image4} alt="Admin Dashboard Image" className='w-full' />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mb-8'>
        <h1 className='caption lg:text-5xl text-3xl mb-8 mt-20'>Site Details</h1>
        <p className='lg:text-2xl text-lg font-light'>Fill in the below fields to craft your site!</p>
      </div>

      <div className='lg:mb-10 mb-2 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-4/5 max-w-3xl'>
          <table className='rounded-lg border-separate border-spacing-5 shadow-lg w-full'>
            <tbody>
              <tr>
                <td colSpan='2'>
                  <div className='p-5'>
                    
                    
                    
                    
                    <div className='mb-5'>
                      <label htmlFor='address'>Place:</label>
                      <textarea 
                        id='place' 
                        name='place' 
                        value={formData.place} 
                        onChange={handleChange} 
                        className='w-full border border-gray-300 rounded px-2 py-1' 
                      />
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='address'>Area:</label>
                      <textarea 
                        id='area' 
                        name='area' 
                        value={formData.area} 
                        onChange={handleChange} 
                        className='w-full border border-gray-300 rounded px-2 py-1' 
                      />
                    </div>
                    <div className='mb-5'>
                      <label htmlFor='address'>Image URL:</label>
                      <input 
                        type="text"
                        id='image' 
                        name='image' 
                        value={formData.image} 
                        onChange={handleChange} 
                        className='w-full border border-gray-300 rounded px-2 py-1' 
                      />
                    </div>

                    <div className='flex flex-col lg:flex-row mb-5'>
                      <div className='flex-1 mb-4 lg:mb-0 lg:mr-5'>
                        <label htmlFor='contactNumber'>Number of bedrooms:</label>
                        <input 
                          type='text' 
                          id='no_of_bedrooms' 
                          name='no_of_bedrooms' 
                          value={formData.no_of_bedrooms} 
                          onChange={handleChange} 
                          className='w-full border border-gray-300 rounded px-2 py-1' 
                          pattern='[0-9]{0,10}'
                        />
                        
                      </div>
                      <div className='flex-1'>
                        <label htmlFor='email'>Number of bathrooms:</label>
                        <input 
                          type='text' 
                          id='no_of_bathrooms' 
                          name='no_of_bathrooms' 
                          value={formData.no_of_bathrooms} 
                          onChange={handleChange}
                          className='w-full border border-gray-300 rounded px-2 py-1'
                        />
                        
                      </div>
                    </div>
                    
                    <div className='flex justify-center'>
                      <button type='submit' className='text-md py-4 px-20 rounded-3xl font-semibold bg-black text-white transition-colors duration-150 hover:bg-gray-800 whitespace-nowrap'>
                        Craft site
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
}

export default SellerDashboard;