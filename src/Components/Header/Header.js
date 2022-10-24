import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon } from 'react-icons/fa';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [profileView, setProfileView] = useState(false)
    console.log(profileView)

    const handleLogOut = () => {
        logOut()
        setProfileView(!profileView)
    }


    return (
        <section className=''>
            <nav className='py-2 px-4 md:px-8 relative'>
                <div onClick={() => setOpen(!open)} className='text-blue-600 w-10 absolute right-4 md:right-14 md:hidden'>
                    {
                        open ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
                            :
                            <Bars3Icon></Bars3Icon>
                    }
                </div>

                <div className='flex md:items-center md:justify-end flex-col md:flex-row items-start font-bold'>
                    <NavLink to='/home' className='flex-grow flex items-center font-bold text-2xl text-blue-600'> <img src="logo.png" className='w-10' alt="" />TRAVELIFY</NavLink>
                    <div className={`flex md:items-center md:justify-end flex-col md:flex-row items-start text-black font-bold ml-10 mt-3 md:m-0 md:block duration-500 ease-in ${open ? 'block' : 'hidden'}`}>
                        <NavLink to='/home'
                            className={({ isActive }) => isActive ?
                                'underline underline-offset-4  decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 hover:text-blue-700'}>Home</NavLink>
                        <NavLink to='/news'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>News</NavLink>
                        <NavLink to='/destination'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Destination</NavLink>
                        <NavLink to='/blog'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Blog</NavLink>
                        <NavLink to='/contact'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Contact</NavLink>
                        <NavLink to='/login'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Login</NavLink>


                        {
                            user?.photoURL ? <Link onClick={() => setProfileView(!profileView)} className='order-first'>
                                <img className='rounded-full w-10 inline border-2 border-blue-600' src={user?.photoURL} alt="" />
                            </Link> :
                                <Link onClick={() => setProfileView(!profileView)} className='order-first'>
                                    <img className='rounded-full w-10 inline border-2 border-blue-600' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                </Link>
                        }

                    </div>
                </div>
            </nav>


            {
                user?.uid && <div className={`absolute top-14 right-8 w-56 ${profileView ? 'block' : 'hidden'}`}>
                    <div className='p-3 rounded-lg bg-green-200'>
                        <h1 className='text-2xl font-bold pt-1'>{user?.displayName}</h1>
                        <h1 className='pb-2'>{user?.email}</h1>
                        <div className='mx-auto'>
                            <button onClick={() => handleLogOut()} className='py-2 text-white px-5 mr-3 inline-block bg-red-600 rounded-md'>LogOut</button>
                            <Link to='/profile'>
                                <button onClick={() => setProfileView(!profileView)} className='py-2 text-white px-5 inline-block bg-blue-600 rounded-md'>Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Header;