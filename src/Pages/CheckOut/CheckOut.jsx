import React, { useState } from "react";
import useCart from "../../Hooks/useCart";

const CheckOut = () => {
  const { data: items = [], refetch, isLoading } = useCart();
  const cartItems = items.patcs || []; // Assuming cart items are in 'patcs'

  const [address, setAddress] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(50); // Default delivery charge
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  console.log(cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const grandTotal = totalPrice + deliveryCharge;

  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePaymentChange = (e) => setPaymentMethod(e.target.value);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side (Items and Address) */}
        <div className="lg:w-3/5 w-full bg-base-200 p-4 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Items</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>

          {/* Address Input */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <textarea
              className="w-full p-2 rounded-md border"
              placeholder="Enter your delivery address"
              value={address}
              onChange={handleAddressChange}
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Right side (Order Summary and Payment) */}
        <div className="lg:w-2/5 w-full bg-base-200 p-4 rounded-lg ">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Price Breakdown */}
          <div className="mb-4">
            <p>Items Total: ${totalPrice.toFixed(2)}</p>
            <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
            <p className="font-semibold">
              Grand Total: ${grandTotal.toFixed(2)}
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <select
              className="w-full p-2 rounded-md border"
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Place Order Button */}
          <div className="mt-6">
            <button className="btn btn-primary w-full">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
