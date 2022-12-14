import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/photography.png";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold">
            <Link to="/services">Service</Link>
          </li>
          <li className="font-semibold">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="font-semibold">
            <Link to="/myreview">My Review</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addService">Add Service</Link>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold">
            <Link to="/blog">Blog</Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar py-5 px-10 mb-2 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="logo" className="w-48" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <button onClick={handleLogOut} className="font-semibold">
            <Link to="/login">Sign Out</Link>
          </button>
        ) : (
          <button className="font-semibold">
            <Link to="/login">Log In</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
