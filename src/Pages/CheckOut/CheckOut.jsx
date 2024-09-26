import React from "react";
import { useForm } from "react-hook-form";
import useCart from "../../Hooks/useCart";
import { IoHomeOutline } from "react-icons/io5";
import showToast from "../../Components/Toast/showToast";
import axios from "axios";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiBillLine } from "react-icons/ri";

const CheckOut = () => {
  const { data: items = [], refetch } = useCart();
  const cartItems = items.patcs || [];
  const total = items.total || 0;
  const deliveryCharge = 150;
  const grandTotal = total + deliveryCharge;

  const { register, handleSubmit, watch, setValue } = useForm();
  const [paymentMethod, setPaymentMethod] = React.useState("Cash on Delivery");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data) => {
    const { address, firstName, phoneNumber } = data;
    if (!address || !firstName || !phoneNumber || !paymentMethod) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setLoading(true);
    try {
      const cartIds = cartItems.map((item) => item.id);
      const orderData = {
        shipping_address: address,
        payment_method: paymentMethod,
        cart_ids: cartIds,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/checkout`,
        orderData
      );

      if (response.status === 200) {
        showToast("Order placed successfully", "success");
        // Clear cart or redirect here
      }
    } catch (error) {
      showToast("Failed to place order", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCart = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/add/to/cart/remove/${itemId}/`
      );
      showToast("Product deleted successfully", "success");
      refetch();
    } catch (error) {
      showToast("Failed to delete product", "error");
    }
  };

  return (
    <div className="container mx-auto p-6 my-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side (Items and Address) */}
        <div className="lg:w-3/5 w-full bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">আপনার আইটেম</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>নাম</th>
                  <th>পরিমাণ</th>
                  <th>মূল্য</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={`${import.meta.env.VITE_BASE_URL}${item.img}`}
                              alt={item.product_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.product_name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="flex gap-3 items-center">
                      <FiMinus
                        className="cursor-pointer"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      />
                      <p>{item.qt}</p>
                      <FiPlus
                        className="cursor-pointer"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      />
                    </td>
                    <td>{item.price.toFixed(2)} টাকা</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Billing Details */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <h3 className="text-lg flex items-center gap-2 font-semibold mb-2">
              <RiBillLine />
              Billing details
            </h3>
            <div className="grid  gap-4">
              <div className="flex items-center gap-5">
                <input
                {...register("firstName")}
                placeholder="Name"
                className="input input-md w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
                <input
                {...register("phoneNumber")}
                placeholder="Phone Number"
                className="input  w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
              </div>
              
              
              <div className="flex items-center gap-5">
              <input
                {...register("email")}
                placeholder="Email Address (Optional)"
                className="input w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
              <input
                {...register("companyName")}
                placeholder="Company Name (Optional)"
                className="input w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
              </div>
              <input
                {...register("address")}
                placeholder="Address"
                className="input input-md h-16 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`btn bg-[#D19E47] text-white w-full py-3 rounded-lg hover:bg-[#b87f33] transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Right side (Order Summary and Payment) */}
        <div className="lg:w-2/5 w-full bg-gray-100 h-full p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Price Breakdown */}
          <div className="mb-4 space-y-2">
            <p className="flex justify-between">
              <span>Items Total:</span>
              <span>{total} টাকা</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Charge:</span>
              <span>{deliveryCharge} টাকা</span>
            </p>
            <p className="font-semibold flex justify-between">
              <span>Grand Total:</span>
              <span>{grandTotal} টাকা</span>
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">পেমেন্ট পদ্ধতি</h3>
            <select
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bkash">Bkash</option>
              <option value="Nogod">Nogod</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
