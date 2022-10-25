import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { id, name, thumbnail, time, lasson, ratings, coursePrice, instructor } = course
    return (
        <div>
            <div className="relative max-w-sm shadow-lg shadow-gray-400 overflow-hidden shadow-lg rounded-lg mx-auto mt-4">
                <img className="w-full rounded-t-lg h-44" src={course.thumbnail} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <h1 className="font-extrabold text-blue-900 text-xl mb-2">{name}</h1>
                    <p className="text-gray-800 text-base">
                        {instructor}
                    </p>
                </div>
                <div className="pt-8">
                    <Link className='absolute bottom-0 w-full'>
                        <button className='py-2 px-3 bg-blue-600 hover:bg-blue-800 font-bold rounded-b-lg text-white w-full'>Course Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;