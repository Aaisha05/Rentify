import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='basecolor' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navbar />
      <h1 className='caption text-2xl mt-6' style={{ textAlign: 'center' }}>Rentify</h1>
      <div className="flex flex-col  justify-center items-center my-50" style={{ marginTop: '50px', maxWidth: '800px', padding: '0 20px' }}>
        <h2 className="caption lg:text-5xl text-3xl mt-8 sm:mt-6 mb-4" style={{ textAlign: 'center' }}>Rentify</h2>
        <h3 className='text-lg mb-8' style={{ color: '#878787', textAlign: 'center' }}>Where renting meets simplicity</h3>
        <Link to="/login" className="bg-black rounded-3xl text-white px-10 py-4 font-medium transition-transform transform hover:scale-105">Get Started</Link>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Carousel />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;