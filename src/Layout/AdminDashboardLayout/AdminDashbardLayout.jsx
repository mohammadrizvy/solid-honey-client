import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const AdminDashbardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="drawer drawer-mobile w-full lg:drawer-open bangla-regular">
      {/* Drawer toggle input */}
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main content area */}
      <div className="drawer-content flex flex-col min-h-screen bg-white">
        <div className="p-4 lg:p-6 flex-grow">
          <Outlet />
        </div>
      </div>

      {/* Sidebar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content w-64 h-full lg:w-72 p-4 pb-52">
          <img
            className="w-24 lg:w-[100px] mb-4 mx-auto"
            src="https://i.ibb.co/jhD85Kp/logo2024-07-06-21-35-31-66896443c7133-1-removebg-preview.png"
            alt="Logo"
          />

          {/* Admin Menu */}
          <ul className="menu-list  bangla-regular text-base">
            <li>
              <Link to="/admin-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/add-category">Add Category</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/add-products">Add Product</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/manage-products">Manage Products</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/users">Manage Users</Link>
            </li>
            <li>
              <Link to="/admin-dashboard/orders">Manage Orders</Link>
            </li>
            {/* <li>
              <Link to="/admin-dashboard/reports">Reports & Statistics</Link>
            </li> */}
            <li>
              <Link to="/admin-dashboard/settings">Settings</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashbardLayout;
