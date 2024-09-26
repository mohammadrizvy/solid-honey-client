import React, { Children } from 'react';
import AdminDashbardLayout from '../Layout/AdminDashboardLayout/AdminDashbardLayout';
import AdminHome from '../Pages/AdminDashboard/AdminHome/AdminHome';
import AddProduct from '../Pages/AdminDashboard/AddProduct/AddProduct';
import ManageProduct from '../Pages/AdminDashboard/ManageProduct/ManageProduct';
import ManageUser from '../Pages/AdminDashboard/ManageUser/ManageUser';
import ManageOrder from '../Pages/AdminDashboard/ManageOrder/ManageOrder';
import Setting from '../Pages/AdminDashboard/Setting/Setting';
import AddCategory from '../Pages/AdminDashboard/AddCategory/AddCategory';

const adminDashboard = {
  path: "/admin-dashboard",
  element: <AdminDashbardLayout />,
  children: [
    {
      path: "",
      element: <AdminHome></AdminHome>,
    },
    {
      path: "add-category",
      element: <AddCategory/>,
    },
    {
      path: "add-products",
      element: <AddProduct/>,
    },
    {
      path: "manage-products",
      element: <ManageProduct/>
    },
    {
      path: "users",
      element: <ManageUser/>
    },
    {
      path: "orders",
      element: <ManageOrder/>,
    },
    {
      path: "settings",
      element:<Setting/> ,
    },
  ],
};

export default adminDashboard;