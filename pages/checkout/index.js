import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "@/context";

export default function Checkout() {
  const router = useRouter();
  const { cartItems } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentDetails: "",
  });
  const [orderDetails, setOrderDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (simulated API call)
    const orderSummary = {
      items: cartItems,
      subtotal: cartItems.reduce((total, item) => total + item.price, 0),
      name: formData.name,
      address: formData.address,
      paymentMode: formData.paymentMode,
      couponCode: formData.couponCode,
    };

    // Display a confirmation message with the order summary
    setOrderDetails(orderSummary);
  };

  return (
    <div className="p-5 max-w-xl mx-auto mt-4 bg-white rounded-md shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-5">Checkout</h2>
      {orderDetails ? (
        <>
          <p className="mb-3 text-center text-green-600 font-bold">
            Order Confirmed!
          </p>
          <div className="mb-5">
            <h3 className="text-center text-lg font-bold mb-2">
              Order Summary:
            </h3>
            <ul className="text-center text-lg mb-2">
              {orderDetails.items.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.price}
                </li>
              ))}
            </ul>
            <p className="text-center font-bold mt-2">
              Subtotal: ${orderDetails.subtotal.toFixed(2)}
            </p>
            <p className="text-center text-lg mb-2">
              Name: {orderDetails.name}
            </p>
            <p className="text-center text-lg mb-2">
              Address: {orderDetails.address}
            </p>
            <p className="text-center text-lg mb-2">
              Payment Mode: {orderDetails.paymentMode}
            </p>
            <p className="text-center text-lg mb-2">
              Coupon Code: {orderDetails.couponCode}
            </p>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-3">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </label>
          <label className="block mb-3">
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </label>
          <label className="block mb-5">
            Payment Mode:
            <div>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cashOnDelivery"
                  onChange={handleInputChange}
                />
                Cash on Delivery
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="upi"
                  onChange={handleInputChange}
                />
                UPI
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="paymentMode"
                  value="card"
                  onChange={handleInputChange}
                />
                Card
              </label>
            </div>
          </label>
          <label className="block mb-3">
            Coupon Code:
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </label>
          <p className="text-center font-bold">Order Summary</p>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mt-5 mb-4">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <p className="font-bold mb-4">
            Subtotal: $
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </p>

          <button
            type="submit"
            className="p-2 bg-yellow-500 text-white rounded-md hover:bg-black"
          >
            Confirm Order
          </button>
        </form>
      )}
    </div>
  );
}
