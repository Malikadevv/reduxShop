import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                    <nav className="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-200">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                            <a href="https://flowbite.com/" className="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9"
                                     alt="Flow bite Logo"/>
                                <span
                                    className="self-center text-xl font-semi-bold whitespace-nowrap dark:text-white text-white">Shop</span>
                            </a>
                            <div className="flex md:order-2">
                                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                        aria-expanded="false"
                                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="event"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clipRule="events"></path>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                                <div className="relative hidden md:block">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="even odd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clipRule="even odd"></path>
                                        </svg>
                                        <span className="sr-only">Search icon</span>
                                    </div>
                                    <input type="text" id="search-navbar"
                                           className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search..."/>
                                </div>
                                <button data-collapse-toggle="navbar-search" type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-controls="navbar-search" aria-expanded="false">
                                    <span className="sr-only">Open menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="even odd"
                                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                              clipRule="even odd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                                 id="navbar-search">
                                <div className="relative mt-3 md:hidden">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="even odd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clipRule="even odd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="search-navbar"
                                           className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search..."/>
                                </div>
                                <ul className="  header-nav flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <NavLink to='/'
                                                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-300 md:dark:hover:bg-transparent dark:border-gray-700"
                                                 aria-current="page">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/favorites'
                                                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-300 md:dark:hover:bg-transparent dark:border-gray-700">Favorites</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/basket'
                                                 className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Basket</NavLink>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default Header;