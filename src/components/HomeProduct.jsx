import React, { useEffect, useState } from 'react';
import { addToCart } from '../CartService';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

export default function HomeProduct({ product }) {

    const [flag, setFlag] = useState(() => {
        const savedFlag = localStorage.getItem(`flag-${product._id}`);
        return savedFlag === 'true';
    });

    useEffect(() => {
        localStorage.setItem(`flag-${product._id}`, flag);
    }, [flag, product._id]);

    const handleAddToCartClick = (e, productId) => {
        // Stop event propagation to prevent navigating to product details
        e.stopPropagation();

        // Call the addToCart function
        addToCart(productId);
    };

    return (
        <div className='md:w-full px-4'>
        <div className='product py-4'>
            <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                {/* Product Image with Visible Border Radius */}
                <div className="w-full h-80 bg-[#F1F1F1] rounded-xl mx-auto flex justify-center items-center relative group transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    {/* Category Badge - Visible on Hover */}
                    <div className="absolute top-6 left-6 bg-[#F1F1F1] text-black text-xs font-semibold py-1 px-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {product.category.name}
                    </div>
    
                    <Link to={`/productdetails/${product.id}/${product.category.name}`} className="w-56 h-72">
                        <img className="w-full h-full object-cover" src={product.imageCover} alt="product image" />
                    </Link>
    
                    {/* Add to Cart Button */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a onClick={(e) => handleAddToCartClick(e, product?.id)}
                           className="text-xl text-black cursor-pointer focus:ring-4 focus:ring-gray-300 rounded-lg p-2 transition-colors duration-200">
                            <i className="fa-solid fa-cart-plus"></i>
                        </a>
                    </div>
                </div>
    
                <div className="px-3 pb-5 flex justify-between mt-5">
                    <div>
                        <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                            <h3 className="text-black font-semibold text-base tracking-tight line-clamp-1">
                                {product.title.split(' ').slice(0, 2).join(' ')}
                            </h3>
                            <span>{product.price} EGP</span>
                        </Link>
                    </div>
    
                    <div className="flex items-center justify-between mt-2">
                        <Ratings ratings={product?.ratingsAverage} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
