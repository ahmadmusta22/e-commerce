import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <div className=''>
       <section className="flex items-center justify-between px-16 py-20 bg-white">
      {/* Left Section */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Discover <br /> Perfect Products for <br /> Every Moment
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Shop with confidence across our diverse range of categories. Whether
          you're upgrading your tech or refreshing your style, we've curated the
          best products just for you.
        </p>
       <Link to={'/products'}>
       <button to={'/products'} className="mt-6 flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
          Shop now <FaArrowRight className="ml-2" />
        </button>
       </Link>
      </div>

      {/* Right Section */}
      <div className="text-left max-w-sm">
        <div className="flex items-center text-black">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-black text-xl" />
          ))}
          <span className="ml-2 text-gray-600 text-lg">4.9 / 399 Reviews</span>
        </div>
        <h3 className="font-bold text-lg mt-2">Variety, Quality, Trust, Choice</h3>
        <p className="text-gray-500 mt-2 text-md">
          Your ultimate shopping destination. Explore our vast selection of
          carefully curated products loved by customers worldwide.
        </p>
      </div>
    </section>
    </div>
  )
}
