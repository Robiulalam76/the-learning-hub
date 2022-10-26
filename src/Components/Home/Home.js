import React from 'react';
import { Link } from 'react-router-dom';
import homeimg from '../../assets/images/home-1.gif'

const Home = () => {
    return (
        <div>
            <main className="bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-400 h-screen">
                <div className="flex z-20 items-center">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between my-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-center md:text-left text-2xl md:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Welcome To Our <span className='text-pink-600'>The Learning Hub</span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white text-center md:text-left mt-3">
                                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                            </p>
                            <div className="flex mt-8">
                                <Link to='/courses' className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 text-white text-md mr-4 hover:bg-pink-400">
                                    Get started
                                </Link>
                                <Link className="uppercase py-2 px-4 rounded-lg border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className="sm:w-1/3 mt-12 md:mt-0">
                            <img src={homeimg} className="max-w-xs md:max-w-sm m-auto shadow-lg rounded-lg shadow-2xl shadow-white" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;