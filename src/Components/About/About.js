import React from 'react';

const About = () => {
    return (
        <div className='bg-gradient-to-r from-sky-200 via-purple-300 to-blue-200'>
            <div class="flex flex-col items-center justify-center p-10 w-[96%] md:w-[90%] mx-auto ">
                <div class="text-center">
                    <div>
                        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                        <p class="mt-6 text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        <p class="mt-4 text-gray-800"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                    </div>
                </div>



                <div className='flex flex-col md:flex-row justify-between items-center mt-12'>
                    <section className="p-8 rounded-lg bg-violet-200 md:mr-8 mt-8 mx-auto">
                        <div className="space-y-5 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className='text-rose-600' strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                            </svg>
                            <h1 className="text-3xl text-gray-800 font-semibold">
                                Subscribe to our newsletter
                            </h1>
                            <p className="text-gray-800 leading-relaxed">
                                Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                            </p>
                        </div>
                        <div className="mt-5">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="items-center justify-center sm:flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
                                />
                                <button
                                    className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400">
                                No spam ever, we are care about the protection of your data.
                                Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
                            </p>
                        </div>
                    </section>
                    <section className="dark:text-gray-100 mt-8 w-full mx-auto">
                        <form novalidate="" className="full p-8 mx-auto rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                            <h2 className="text-3xl font-bold leading-tight">Contact us</h2>
                            <div>
                                <label for="name" className="block mb-1 ml-1">Name</label>
                                <input id="name" type="text" placeholder="Your name" required="" className="w-full block p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                            </div>
                            <div>
                                <label for="email" className="block mb-1 ml-1">Email</label>
                                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                            </div>
                            <div>
                                <label for="message" className="block mb-1 ml-1">Message</label>
                                <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>


        </div>
    );
};

export default About;