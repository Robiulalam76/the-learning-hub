import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseDetails = useLoaderData()
    const { id, name, thumbnail, time, lesson, ratings, coursePrice, instructor, details_info } = courseDetails;

    return (
        <div>
            <div className="relative w-[96%] md:w-[65%] shadow-lg shadow-gray-400 shadow-lg rounded-lg mx-auto mt-12
            bg-gradient-to-r from-indigo-200 via-purple-100 to-blue-200">
                <img className="w-full rounded-t-lg h-36" src={thumbnail} alt="Sunset in the mountains" />

                <div className='px-2 md:px-8'>
                    <div className='flex justify-between items-center'>
                        <div className="py-4">
                            <h1 className="font-extrabold text-blue-900 text-xl mb-2">{name}</h1>
                            <p className="text-gray-800 text-base">
                                {instructor}
                            </p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center'>
                            <Link>
                                <button className='py-2 px-3 bg-blue-500 text-white font-bold my-4 mr-3'>Download PDF</button>
                            </Link>
                            <Link>
                                <button className='py-2 text-center px-3 bg-violet-500 text-white font-bold'>Get Premium Access</button>
                            </Link>
                        </div>
                    </div>



                    <div className='flex justify-between items-center my-4 w-96'>
                        <h1 className='font-extrabold text-rose-600 text-3xl'>${coursePrice}</h1>
                        <div className='flex justify-between items-center'>

                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26A6.995 6.995 0 0118 11zM7 11V4h5v7L9.5 9.5 7 11z"></path><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z"></path></svg>
                            </span>
                            <h1 className='font-bold text-blue-900'>Lesson: {lesson}</h1>
                        </div>

                        <div className='text-yellow-500 flex justify-between items-center'>
                            <span className='text-blue-900 mr-1'>{ratings}</span>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            </span>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            </span>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            </span>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                            </span>
                        </div>
                    </div>


                    <div>
                        <h1 className="font-extrabold text-blue-900 text-xl mb-2">Summery Of {name}</h1>
                        <small>{details_info.description}</small>
                    </div>
                </div>
                <div className="pt-8">
                    <Link to='' className=''>
                        <button className='py-2 px-3 font-bold rounded-b-lg text-white w-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-800 hover:to-blue-900 
                        '>Course Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;