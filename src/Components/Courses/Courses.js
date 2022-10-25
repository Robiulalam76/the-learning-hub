import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div className='grid md:grid-cols-6 gap-4 relative'>
            <div className='md:col-span-1 bg-violet-500 pt-8 w-full'>
                <h1 className='bg-blue-50 py-2 text-center font-bold text-blue-900 md:1xl lg:text-2xl'>Total Courses {courses.length}</h1>
                <div className='grid grid-cols-3 md:grid-cols-none px-2 md:pl-8 text-center md:text-left'>
                    {
                        courses.map(course =>
                            <Link className='md:block font-bold text-white hover:text-blue-600 pt-3' to={``}>{course.name}
                            </Link>)
                    }
                </div>
            </div>
            <div className='md:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:px-6 w-[90%] md:w-full mx-auto'>
                {
                    courses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;