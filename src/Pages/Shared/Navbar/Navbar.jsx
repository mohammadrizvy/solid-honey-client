import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const admin = true;
  const user = false; // Example user state, change it according to your actual logic

  const { data: cartData = [], refetch, isLoading } = useCart();
   const cartItems = cartData.patcs || [];
  console.log(cartItems)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 px-4  border-b-2  rounded-md sticky top-0 z-50">
      {/* Start Section for Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu Icon */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMobileMenu}
          >
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
          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">আমাদের সম্পর্কে</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>সকল পন্য</summary>
                  <ul className="p-2">
                    <li>
                      <a>Option 1</a>
                    </li>
                    <li>
                      <a>Option 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/">ব্লগ</Link>
              </li>
              <li>
                <Link to="/">টার্মস এন্ড কন্ডিশন</Link>
              </li>
              <li>
                <Link to="/">যোগাযোগ</Link>
              </li>
              {admin && (
                <li>
                  <Link to="/dashboard">ড্যাশবোর্ড</Link>
                </li>
              )}
            </ul>
          )}
        </div>
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-10 h-10 md:w-10 md:h-10"
            src="/Solid-Honey-Logo-for-daraz-100x100.png"
            alt="myLogo"
          />
          <span className="text-xl font-semibold">Solid Honey-সলিড মধু</span>
        </Link>
      </div>

      {/* Center Section for Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">আমাদের সম্পর্কে</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>সকল পন্য</summary>
              <ul className="p-2">
                <li>
                  <a>Option 1</a>
                </li>
                <li>
                  <a>Option 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/">ব্লগ</Link>
          </li>
          <li>
            <Link to="/">টার্মস এন্ড কন্ডিশন</Link>
          </li>
          <li>
            <Link to="/">যোগাযোগ</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard">ড্যাশবোর্ড</Link>
            </li>
          )}
        </ul>
      </div>

      {/* End Section for User Actions */}
      <div className="navbar-end">
        <Link to="/carts" className="btn btn-ghost">
          <p></p>
          <div className="flex">
            <IoBagHandleOutline size={24} />
            {/* Only show the badge if data exists and its length is greater than 0 */}
            {cartItems && cartItems.length > 0 && (
              <div className="bg-[]">{cartItems.length}</div>
            )}
          </div>
        </Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FaRegUser size={24} />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <Link to="/dashboard">
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-ghost">
            <CiLogin size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
