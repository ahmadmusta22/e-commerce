import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { addToCart } from '../CartService';

export default function RelatedProducts({ products }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5, // Default number of slides
        slidesToScroll: 3,
        margin: 20,
        responsive: [
            {
                breakpoint: 1200, // For screen sizes < 1200px
                settings: {
                    slidesToShow: 4, // Show 4 slides
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992, // For screen sizes < 992px
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // For screen sizes < 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For screen sizes < 480px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mt-52">
            <h3 className="text-2xl font-medium">More Products :</h3>

            <Slider {...settings}>
                {products.map((product) => {
                    return (
                        <div className="py-20 w-full max-w-sm mx-auto rounded-md p-2 overflow-hidden" key={product.id}>
                            <div className="shadow-md">
                                <div
                                    className="flex items-end justify-end h-56 w-full bg-cover"
                                    style={{ backgroundImage: `url('${product.imageCover}')` }}
                                >
                                    <button
                                        onClick={() => addToCart(product?.id)}
                                        className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 uppercase">{product.title}</h3>
                                        <span className="text-gray-500 mt-2">{product.price} EGP</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

