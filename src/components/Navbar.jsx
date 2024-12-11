import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link>হোম</Link>
            </li>
            <li>
              <Link>চাকরি খুঁজুন</Link>
            </li>
            <li>
              <Link>নিয়োগকারী</Link>
            </li>
            <li>
              <Link>যোগাযোগ</Link>
            </li>
          </ul>
        </div>
        <a className="text-xl font-poppins font-bold">
          <span className='text-blue-500 font-extrabold'>Job</span>Lagbe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu *:text-base menu-horizontal px-1">
          <li>
            <Link>হোম</Link>
          </li>
          <li>
            <Link>চাকরি খুঁজুন</Link>
          </li>
          <li>
            <Link>নিয়োগকারী</Link>
          </li>
          <li>
            <Link>যোগাযোগ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="border-blue-500 font-medium border py-2 px-5 rounded-lg ">
          সাইন ইন
        </Link>
        <Link className="bg-blue-500 text-white font-medium py-2 px-5 rounded-lg">
          শুরু করুন
        </Link>
      </div>
    </div>
  );
};

export default Navbar;