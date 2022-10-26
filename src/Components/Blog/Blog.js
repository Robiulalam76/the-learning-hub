import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <section class="text-gray-900">
                    <div class="w-full px-5 py-12 mx-auto">
                        <div class="text-center mb-12">
                            <h1 class="sm:text-3xl text-2xl md:text-4xl font-bold text-center title-font text-blue-900 mb-4">
                                InterView Question Answer
                            </h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </p>
                        </div>
                        <div class="flex flex-col items-center md:w-[70%] sm:mb-2 mx-auto">
                            <div class="w-full px-4">
                                <details class="mb-8 bg-blue-300 rounded-lg px-4 py-1">
                                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 my-3 cursor-pointer">
                                        1. What is CORS?
                                    </summary>

                                    <span>
                                        Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.
                                    </span>
                                </details>
                                <details class="mb-8 bg-blue-300 rounded-lg px-4 py-1">
                                    <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 my-3 cursor-pointer">
                                        2. Why are you using firebase? What other options do you have to implement authentication?
                                    </summary>

                                    <span>
                                        <h1 className='font-bold my-2 text-black'>Why are you using firebase?</h1>

                                        Firebase Authentication aims to make building secure authentication systems easy,
                                        while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution,
                                        supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.

                                        <h1 className='font-bold my-2 text-black'>Why are you using firebase?</h1>

                                        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
                                        alternatives and competitors to Firebase Authentication.
                                    </span>
                                </details>
                            </div>
                            <div class="w-full px-4">
                                <details class="mb-8 bg-blue-300 rounded-lg px-4 py-1">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 my-3 cursor-pointer">
                                        3. How does the private route work?
                                    </summary>

                                    <span class="">
                                        Private Routes in React Router (also called Protected Routes) require a user to be authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it.
                                        The private route component is similar to the public route, the only change is the redirect URL and authenticates condition.
                                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes
                                        If he is authenticated
                                    </span>
                                </details>
                                <details class="mb-8 bg-blue-300 rounded-lg px-4 py-1">
                                    <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 my-3 cursor-pointer">
                                        4. What is Node.js? How does Node work?
                                    </summary>

                                    <span>
                                        <h1 className='font-bold my-2 text-black'>What is Node.js?</h1>

                                        Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous,
                                        event-driven model.

                                        <h1 className='font-bold my-2 text-black'>How does Node work?</h1>

                                        Node.js is a server-side platform that allows you to run JavaScript applications in a run-time environment. It includes all the components you need to execute a JavaScript program on a server utilizing the same architecture as the Java Runtime Environment (JRE). With JRE, you have the Java Virtual Machine (JVM) and library classes. Node.js uses the Chrome V8 JavaScript engine in place of the JVM and the Node API or modules instead of Java classes.
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;

