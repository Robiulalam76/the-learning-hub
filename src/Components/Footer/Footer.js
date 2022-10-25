import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="px-4 py-8 mx-auto max-w-7xl mt-[150px] md:mt-12">
                <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
                    <div class="col-span-3">
                        <Link to='/' title="Go to The Learning Hub Home Page">
                            <img src="logo.png" alt="" />
                        </Link>
                        <p class="my-4 text-xs leading-normal text-gray-500">
                            Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand.
                        </p>
                        <label class="flex w-24">
                            <span class="sr-only">Select a language</span>
                            <select class="form-select form-select-sm">
                                <option>English</option>
                                <option>Tamil</option>
                            </select>
                        </label>
                    </div>
                    <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                        <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Features</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Integrations</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Documentation</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">FAQs</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Pricing</a>
                    </nav>
                    <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                        <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About</p>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Press-Kit</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Company</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Privacy</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Blog</a>
                    </nav>
                    <nav class="col-span-2 md:col-span-1 lg:col-span-2">
                        <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Twitter</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Instagram</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Email</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Advertising</a>
                        <a href="#" class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary">Chat</a>
                    </nav>
                    <div class="col-span-3">
                        <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
                        <form action="#" class="mb-2">
                            <div class="flex ">
                                <input class="border-rose-600 pl-3 border-2 rounded-l-md" type="email" placeholder="Enter your email" />
                                <button class="bg-rose-600 py-2 rounded-r-md px-3 text-white rounded-y-md font-bold" type="submit">Subscribe</button>
                            </div>
                        </form>
                        <p class="text-xs leading-normal text-gray-500">Get lessons and insights on how to grow your freelance business.</p>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                    <p class="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright 2020 Skcript. All Rights Reserved.</p>
                    <div class="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                        <a href="#" class="text-sm text-gray-600 transition hover:text-primary">Terms</a>
                        <a href="#" class="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;