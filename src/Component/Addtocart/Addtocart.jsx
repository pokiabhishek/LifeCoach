import React, { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagCheckSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Addtocart.css";

const AddToCart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(CartContext);


  const handleChange = (event, item) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount) && newCount > 0) {
      updateCartItem(item.title, newCount);
    }
  };


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="Addtocart">
      <div className="container">
        <h1>Cart</h1>
        <div>
          {cartItems.length === 0 ? (
            <div className="Addtocart-empty">
              <CiShoppingCart className="fs-4" />
              <span>Your cart is currently empty.</span>
            </div>
          ) : (
            <div className="Addtocart-item-list">
              <div className="Addtocart-item-title">
                <p></p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {cartItems.map((item, index) => (
                <div className="Addtocart-item-title Addtocart-item" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.count}
                    onChange={(event) => handleChange(event, item)}
                  />
                  <p>${(item.price * item.count).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.title)}>x</button>
                </div>
              ))}

              <div className="Addtocart-checkout flex flex-col justify-center p-5 mx-auto my-10 relative max-w-md w-full">
                <IoBagCheckSharp className="absolute top-[-30px] left-[42%] text-white bg-black text-6xl p-3 rounded-full" />

                <div className="flex flex-col md:flex-row items-center justify-between">
                  <h2 className="uppercase text-sm font-semibold tracking-wider">Subtotal</h2>
                  <span className="text-xl font-semibold text-gray-600">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mt-2">
                  <h2 className="uppercase text-sm font-semibold tracking-wider">Total</h2>
                  <span className="text-xl font-semibold text-gray-600">${subtotal.toFixed(2)}</span>
                </div>

                <button className="uppercase bg-black text-white p-2 mt-4 tracking-tight cursor-pointer hover:bg-gray-800 transition-colors duration-300">
                  <Link to='/Checkout'> Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
