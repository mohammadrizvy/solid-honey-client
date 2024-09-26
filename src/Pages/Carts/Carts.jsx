import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import showToast from "../../Components/Toast/showToast";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";

const Carts = () => {
  const { data: cartData = {}, refetch, isLoading } = useCart();
  const cartItems = cartData.patcs || [];
  const total = cartData.total || 0; // Total from the backend

  

  const handleDeleteCart = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/remove/${itemId}/`
      );
      showToast("Product deleted successfully", "success");
      refetch();
    } catch (error) {
      showToast("Failed to delete product", "error");
    }
  };

  const handleIncreaseQuantity = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/increase/${itemId}/`
      );
      showToast("Quantity increased", "success");
      refetch();
    } catch (error) {
      showToast("Failed to increase quantity", "error");
    }
  };

  const handleDecreaseQuantity = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/decrease/${itemId}/`
      );
      showToast("Quantity decreased", "success");
      refetch();
    } catch (error) {
      showToast("Failed to decrease quantity", "error");
    }
  };

  return (
    <div className="flex flex-col max-w-xl p-6 space-y-4 sm:p-10 bg-base-200d mx-auto my-10 pb-40">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      <ul className="flex flex-col divide-y dark:divide-gray-300">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={`${import.meta.env.VITE_BASE_URL}${item.img}` || "default-image-url.jpg"}
                alt={item.product_name}
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {item.product_name}
                    </h3>
                    <p className="text-sm dark:text-gray-600">
                      {item.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item.price} BDT</p>
                  </div>
                </div>
                <div className="flex mb-3 items-center gap-2 text-sm">
                  <FiMinus
                    className="cursor-pointer"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  />
                  <p>{item.qt}</p>
                  <FiPlus
                    className="cursor-pointer"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  />
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    onClick={() => handleDeleteCart(item.id)}
                    className="flex px-2 py-1 space-x-1"
                  >
                    <RiDeleteBin2Line className="w-4 h-4 fill-current" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Price and Checkout Section */}
      <div className="mt-6 flex justify-end items-center space-x-10 border-t-2 pt-4">
        <div className="text-lg font-semibold underline">
          মোট মূল্য: {total} BDT
        </div>
        <Link to={"/check-out"}>
          <button className="btn btn-sm bg-[#D19E47] text-white ">
            Checkout <MdOutlineShoppingCartCheckout size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Carts;
