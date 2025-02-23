import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loadingscreen from './Loadingscreen';
import { Helmet } from 'react-helmet';
import HomeProduct from './HomeProduct';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function RecentProducts() {
  const [search, setSearch] = useState([]);

  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { data, isError, isFetching, isLoading, error } = useQuery({
    queryKey: ['recentProducts'],
    queryFn: getRecent,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loadingscreen />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center">
        <h3>{error.message}</h3>
      </div>
    );
  }

  function searchFun(e) {
    let term = e.target.value;
    setSearch(
      data.data.data.filter((ele) =>
        ele.title.toLowerCase().includes(term.trim().toLowerCase())
      )
    );
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Search Bar */}
      <div className="max-w-2xl my-10 mx-auto">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-black sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={searchFun}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Search products ...."
              required
            />
          </div>
        </form>
      </div>

      {/* Product Grid with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 container mx-auto">
        {(search.length ? search : data?.data.data).map((product, index) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }} // Pop effect on hover
          >
            <HomeProduct product={product} />
          </motion.div>
        ))}
      </div>
    </>
  );
}



