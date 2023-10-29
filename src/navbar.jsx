import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
    return(
        <header className="inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
            <FontAwesomeIcon icon={faBarsStaggered} className="text-white text-3xl"/>
            </a>
            <p className="p-2 text-2xl text-white font-bold text-3xl">Fraaap</p>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">FAQ</a>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Start Now
          </button>
          </div>
        </nav>
        </header>
    )
}

export default Navbar;