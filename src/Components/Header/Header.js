import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/AuthContext';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [profileView, setProfileView] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    const [darkMod, setDarkMod] = useState(false);

    const handleLogOut = () => {
        logOut()
        setProfileView(!profileView)
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <section className=''>
            <nav className='bg-gradient-to-r from-indigo-800 via-purple-600 to-blue-300 py-2 px-4 md:px-8 relative'>
                <div onClick={() => setOpen(!open)} className='text-blue-600 w-10 absolute right-4 md:right-14 md:hidden'>
                    {
                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                    }
                </div>

                <div className='flex md:items-center md:justify-end flex-col md:flex-row items-start font-bold'>
                    <NavLink to='/home' className='flex-grow flex items-center font-bold text-2xl text-blue-600'> <img src="logo.png" className='w-44' alt="" /></NavLink>
                    <div className={`flex md:items-center md:justify-end flex-col md:flex-row items-start text-black font-bold ml-10 mt-3 md:m-0 md:block duration-500 ease-in ${open ? 'block' : 'hidden'}`}>

                        <Link className='inline mr-10' onClick={() => setDarkMod(!darkMod)}>
                            {
                                darkMod ? <svg className="w-8 h-8 inline text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                    :
                                    <svg className="w-8 h-8 inline text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            }
                        </Link>


                        <NavLink to='/home'
                            className={({ isActive }) => isActive ?
                                'underline underline-offset-4  decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 hover:text-blue-700'}>Home</NavLink>
                        <NavLink to='/courses'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Courses</NavLink>
                        <NavLink to='/blog'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Blog</NavLink>
                        <NavLink to='/about'
                            className={({ isActive }) => isActive ?
                                'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>About</NavLink>

                        {
                            user?.uid ?
                                <>
                                    {
                                        user?.photoURL ?
                                            <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                                                onClick={() => setProfileView(!profileView)} className='order-first'>
                                                <img className='rounded-full w-10 inline border-2 border-blue-600' src={user?.photoURL} alt="" />
                                            </Link> :
                                            <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                                                onClick={() => setProfileView(!profileView)} className='order-first'>
                                                <img className='rounded-full w-10 inline border-2 border-blue-600' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                            </Link>

                                    }
                                </>
                                :
                                <NavLink to='/login'
                                    className={({ isActive }) => isActive ?
                                        'mt-3 underline underline-offset-4 decoration-2 text-rose-600 md:mr-10' : 'md:mr-10 mt-3 hover:text-blue-700'}>Login</NavLink>

                        }




                    </div>
                </div>
            </nav>


            {
                user?.uid && <div className={`absolute top-14 right-8 w-56 ${isHovering || profileView ? 'block' : 'hidden'}`}>
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