import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {

  const admin = true;

  return (
    <div className="navbar  justify-center sticky top-0 z-50 bg-white text-base-content px-32 border-b-2  rounded-md">
      <div className="flex-1 flex items-center gap-4">
        <img
          className="w-[15%]"
          src="/Solid-Honey-Logo-for-daraz-100x100.png"
          alt="myLogo"
        />
        <a className="font-normal text-xl">Solid Honey-সলিড মধু</a>
      </div>

      <div className="flex gap-8">
        {/* হোম */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="font-normal">
            হোম
          </a>
        </div>

        {/* আমাদের সম্পর্কে */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="flex font-normal items-center">
            আমাদের সম্পর্কে <IoIosArrowDown className="ml-1" />
          </a>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>Option 1</a>
            </li>
            <li>
              <a>Option 2</a>
            </li>
          </ul>
        </div>

        {/* সকল পন্য */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="font-normal flex items-center">
            সকল পন্য <IoIosArrowDown className="ml-1" />
          </a>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>Option 1</a>
            </li>
            <li>
              <a>Option 2</a>
            </li>
          </ul>
        </div>

        {/* ব্লগ */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="font-normal flex items-center">
            ব্লগ <IoIosArrowDown className="ml-1" />
          </a>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>Option 1</a>
            </li>
            <li>
              <a>Option 2</a>
            </li>
          </ul>
        </div>

        {/* টার্মস এন্ড কন্ডিশন */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="font-normal">
            টার্মস এন্ড কন্ডিশন
          </a>
        </div>

        {/* যোগাযোগ */}
        <div className="dropdown dropdown-hover">
          <a tabIndex={0} className="font-normal flex items-center">
            যোগাযোগ <IoIosArrowDown className="ml-1" />
          </a>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>Option 1</a>
            </li>
            <li>
              <a>Option 2</a>
            </li>
          </ul>
        </div>

        {/* Dashboard for Admin */}
        {admin ? (
          <div className="dropdown dropdown-hover">
            <a tabIndex={0} className="font-normal">
              <Link to="/dashboard">ড্যাশবোর্ড</Link>
              
            </a>
          </div>
        ) : null}

        {/* Cart Icon */}
        <div className="dropdown dropdown-end">
          <div>
            <IoBagHandleOutline size={30} color="#FC8B8A" />
          </div>
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
      </div>
    </div>
  );
};

export default Navbar;
