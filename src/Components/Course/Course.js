import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";
// import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const Course = () => {
    const courseDetails = useLoaderData()
    const { id, name, thumbnail, time, lesson, ratings, coursePrice, instructor, details_info } = courseDetails;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const ref = React.createRef();

    return (
        <div ref={ref} className='w-[96%] md:w-[55%] mx-auto'>
            <div className='flex flex-col md:flex-row justify-center md:justify-end items-center mt-3'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='py-2 mr-1 hover:animate-none hover:bg-green-800 transition ease-in duration-500 rounded-lg text-center px-3 bg-violet-500 text-white font-bold' onClick={toPdf}>Direct Download</button>}
                </Pdf>
                <Link onClick={handlePrint}>
                    <img className='w-40 animate-bounce hover:animate-none h-[40px] my-4 md:mr-3 hover:border-2 hover:border-blue-600 rounded-[10px]' src="https://www.pngall.com/wp-content/uploads/2/Downloadable-PDF-Button-PNG-File.png" alt="" />
                </Link>

                <Link to={`/checkout/course/${id}`}>
                    <button className='py-2 hover:animate-none hover:bg-green-800 transition ease-in duration-500 rounded-lg text-center px-3 bg-violet-500 text-white font-bold'>Get Premium Access</button>
                </Link>
            </div>

            <div ref={componentRef} className="relative mt-4 shadow-lg shadow-gray-400 shadow-lg rounded-lg mx-auto
            bg-gradient-to-r from-indigo-200 via-purple-100 to-blue-200">
                <img className="w-full rounded-t-lg h-48" src={thumbnail} alt="Sunset in the mountains" />

                <div className='px-2 md:px-8'>
                    <div className='flex justify-between items-center'>
                        <div className="py-4">
                            <h1 className="font-extrabold text-blue-900 text-4xl mb-2">{name}</h1>
                            <h1 className="font-bold text-1xl">Instructor</h1>
                            <p className="text-gray-800 text-base">
                                {instructor}
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center flex-wrap my-4 md:w-96'>
                        <h1 className='font-extrabold text-rose-600 text-3xl mr-2'>${coursePrice}</h1>
                        <div className='flex justify-between items-center mr-2'>

                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26A6.995 6.995 0 0118 11zM7 11V4h5v7L9.5 9.5 7 11z"></path><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 7.5v-5l4 2.5-4 2.5z"></path></svg>
                            </span>
                            <h1 className='font-bold text-blue-900'>Lesson: {lesson}</h1>
                        </div>

                        <div className='flex justify-between items-center mr-2'>
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683618210" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-0.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c0.1-6.2-5-11.2-11.1-11.2z"></path><path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z"></path></svg>
                            </span>
                            <h1 className='font-bold text-blue-900'>{time}</h1>
                        </div>

                        <div className='text-yellow-500 flex justify-between items-center mr-2'>
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
                        <h1 className="font-extrabold text-blue-900 text-xl mb-1">Description</h1>
                        <hr className='border-blue-600 mb-1' />
                        <small>{details_info.description}</small>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-blue-900 text-xl mt-3">Topics List</h1>
                        {
                            details_info.topics.map(tp => <li
                                className='font-semibold'>
                                {tp}
                            </li>)
                        }
                    </div>
                </div>
                <div className="pt-8">
                    <Link to='/courses' className=''>
                        <button className='py-2 px-3 font-bold rounded-b-lg text-white w-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-800 hover:to-blue-900 
                        '>Back To Course Page</button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col my-12 p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3">
                            <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="p-4 border rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                        <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <a rel="noopener noreferrer" href="#" className="text-sm dark:text-gray-400">Maybe later</a>
                </div>
            </div>

        </div>
    );
};

export default Course;
