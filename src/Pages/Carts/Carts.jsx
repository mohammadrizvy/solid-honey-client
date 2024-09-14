import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import showToast from "../../Components/Toast/showToast"; // Adjust the path as needed
import { Link } from "react-router-dom";

const Carts = () => {
  const { data: cartData = [], refetch, isLoading } = useCart();
  const cartItems = cartData.patcs || []; // Ensure this path matches your data structure

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  console.log("Cart items : ", cartItems);

  const handleDeleteCart = async (itemId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/add/to/cart/remove/${itemId}/`
      );
      console.log("Deleted Success");
      showToast("Product deleted successfully", "success");
      refetch(); // Refetch cart data after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      showToast("Failed to delete product", "error");
    }
  };

  return (
    <div className="my-10 w-[70%] pb-40 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
          <thead>
            <tr>
              <th className="text-base">নাম</th>
              <th className="text-base">বিভাগ</th>
              <th className="text-base">পরিমাণ</th>
              <th className="text-base">দাম</th>
              <th className="text-base"></th>
            </tr>
          </thead>
          <tbody>
            {/* Cart items */}
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.img || "default-image-url.jpg"}
                          alt={item.product_name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.product_name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>{item.qt}</td>
                <td>
                  <p>{item.price} BDT</p>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteCart(item.id)}
                    className="btn btn-sm text-white btn-error"
                  >
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Price and Checkout Section */}
      <div className="mt-6 flex justify-between items-center border-t-2 pt-4">
        <div className="text-lg font-semibold">মোট মূল্য: {totalPrice} BDT</div>
        <div className="flex gap-4">
          <Link to={"/check-out"}>
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
