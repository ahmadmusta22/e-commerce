import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <div className="bg-white px-6 py-16 md:px-16">
      <section className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Discover <br /> Perfect Products for <br /> Every Moment
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Shop with confidence across our diverse range of categories. Whether
            you're upgrading your tech or refreshing your style, we've curated the
            best products just for you.
          </p>
          <Link to={'/products'}>
            <button className="mt-6 flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all mx-auto md:mx-0">
              Shop now <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left max-w-sm">
          <div className="flex justify-center md:justify-start items-center text-black">
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
  );
}
