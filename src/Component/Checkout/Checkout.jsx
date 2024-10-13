import React, { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import { FaPaypal } from "react-icons/fa"; // PayPal icon
import { MdAttachMoney } from "react-icons/md"; // Cash on delivery icon
import { AiOutlineBank } from "react-icons/ai"; // Bank transfer icon

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate subtotal and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-center text-5xl md:text-7xl border-b-[#eae5bf] border-b-4 py-5">Checkout</h1>
      <h1 className="text-xl tracking-wider text-gray-500 mb-4 py-4">Billing details</h1>
      <div className="flex flex-col md:flex-row justify-between">

        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
          <div className="flex flex-col">
            <div className="flex justify-between gap-3">
              <div className="w-full">
                <p className="uppercase text-[12px]">First Name</p>
                <input type="text" className="border-2 w-full p-2 focus:outline-none" />
              </div>
              <div className="w-full">
                <p className="uppercase text-[12px]">Last Name</p>
                <input type="text" className="border-2 w-full p-2 focus:outline-none" />
              </div>
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Company Name</p>
              <input type="text" className="w-full p-2 border-2 focus:outline-none" />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Street Address</p>
              <input type="text" className="w-full p-2 border-2 text-[12px] focus:outline-none" placeholder="house number and street name" />
              <input type="text" className="w-full p-2 border-2 mt-2 text-[12px] focus:outline-none" placeholder="apartment, suite, unit, etc." />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Town/City</p>
              <input type="text" className="text-[12px] border-2 p-2 w-full focus:outline-none" />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">County (optional)</p>
              <input type="text" className="text-[12px] border-2 p-2 w-full focus:outline-none" />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Postcode</p>
              <input type="text" className="text-[12px] border-2 p-2 w-full focus:outline-none" />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Phone</p>
              <input type="text" className="text-[12px] border-2 p-2 w-full focus:outline-none" />
            </div>

            <div className="py-2">
              <p className="uppercase text-[12px]">Email Address</p>
              <input type="text" className="text-[12px] border-2 p-2 w-full focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-2">
          <h1 className="text-lg font-semibold mb-2">Additional Information</h1>
          <p className="text-sm">Order notes (optional)</p>
          <textarea
            rows="10"
            placeholder="Note about your order"
            className="border-2 w-full p-2 focus:outline-none"
          ></textarea>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6">Your Order</h2>
      <div className="border-t-2 border-gray-300 mt-2">
        <div className="flex justify-between py-2">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        {cartItems.map((item) => (
          <div className="flex justify-between py-1" key={item.title}>
            <span>{item.title} × {item.count}</span>
            <span>£{(item.price * item.count).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold mt-2">
          <span>Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold mt-2">
          <span>Total</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6">Payment Options</h2>
      <div className="border-4 border-black rounded-xl my-4 p-4">
        <div className="flex items-center mb-2">
          <input type="radio" id="cod" name="payment" value="cash_on_delivery" className="mr-2" />
          <MdAttachMoney className="text-green-600 mr-1" />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="radio" id="paypal" name="payment" value="paypal" className="mr-2" />
          <FaPaypal className="text-blue-600 mr-1" />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="radio" id="bank_transfer" name="payment" value="direct_bank_transfer" className="mr-2" />
          <AiOutlineBank className="text-gray-800 mr-1" />
          <label htmlFor="bank_transfer">Direct Bank Transfer</label>
        </div>
        <button className="flex border-2 ml-auto p-2 bg-black text-white hover:bg-gray-800 transition-colors">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
