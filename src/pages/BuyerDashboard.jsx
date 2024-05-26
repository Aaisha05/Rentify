import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { BsSearch } from 'react-icons/bs';
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import image4 from "./homeimage.png";
import ImgMediaCard from '../components/Card'

const filterCategories = ["Chennai", "Coimbatore", "Trichy", "Vandalur", "Tuticorin", "Cuddalore"];

function BuyerDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetch('https://rentify-server-rf0d.onrender.com/all-sites')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      });
  }, []);
  useEffect(() => {
    const results = data.filter(profile =>
      profile.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.no_of_bathrooms.toString().includes(searchTerm) ||
      profile.no_of_bedrooms.toString().includes(searchTerm)
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = (category) => {
    setSearchTerm(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (filteredData.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [filteredData]);

  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar />

      <div className="fixed top-16 left-0 w-full bg-white border-b py-6 z-10">
        <div className="container mx-auto flex justify-center">
          <form onSubmit={handleSubmit} className="w-1/3 flex items-center border bg-white rounded-full ">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              className="w-full py-1 px-4 focus:outline-none rounded-l-full"
              placeholder="Search..."
              style={{ fontSize: '0.8rem' }} 
            />
            <button type="submit" className="bg-black text-white py-2 lg:py-2 px-3 lg:px-6 rounded-r-full focus:outline-none">
              <BsSearch className="lg:h-5 lg:w-5 h-3 w-3" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-[8rem] lg:mt-[9rem] w-full bg-gray-100 border-b py-10 z-50">
        <div className="container mx-auto flex justify-center overflow-x-auto">
          <div className="flex flex-no-wrap overflow-x-auto">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className="flex-shrink-0 mx-2 px-4 lg:px-6 py-2 bg-black text-white rounded-full text-base whitespace-nowrap hover:bg-gray-700 focus:outline-none"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {noResults && (
        <p className="text-center text-lg text-gray-600 mt-10">No results found</p>
      )}

      <div className='text-center mb-2 lg:mb-10 mt-[2rem] lg:mt-[4rem]'>
        <h1 className='caption lg:text-5xl text-3xl mb-8'>Browse your desired site</h1>
        <p className='lg:text-2xl text-lg font-light'>Search your desired site</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 lg:mt-20 mx-auto" style={{ maxWidth: '1200px' }}>
        {filteredData.map((item,index) => (
          
            <ImgMediaCard place={item.place} area={item.area} image={item.image} no_of_bedrooms={item.no_of_bedrooms} no_of_bathrooms={item.no_of_bathrooms} />
          
        ))}
      </div>

      <div className='mb-2 justify-between flex lg:mt-20 mt-40 max-md:flex-col'>
        <div className='flex justify-between max-md:flex-col'>
          <div className='text-center'>
            <h2 className="caption lg:text-6xl text-4xl mb-4 ml-20 mt-[10rem] max-md:mt-0 max-md:ml-0">The ultimate site</h2>
            <h2 className="text-4xl mb-12 font-light ml-20 max-md:ml-0 max-md:text-2xl" style={{ color: "#464545" }}>to get what you're looking for</h2>
            <div className='flex justify-center w-full items-center'>
              <div className='flex justify-center mr-40 mb-10 ml-[9rem]'>
                <Link to="/about1" className="text-md py-4 px-20 rounded-3xl font-semibold text-md whitespace-nowrap"
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
          <div className='mt-16 flex justify-end'>
            <img src={image4} alt="Admin Dashboard Image" className='ml-10 md:w-[70%]' />
          </div>
        </div>
      </div>

      <Carousel />
      <Footer />
    </div>
  );
}

export default BuyerDashboard;