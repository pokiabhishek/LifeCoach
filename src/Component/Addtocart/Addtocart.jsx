import React, { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import { CiShoppingCart } from "react-icons/ci";
import "./Addtocart.css";

const AddToCart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(CartContext);

  
  const handleChange = (event, item) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount) && newCount > 0) {
      updateCartItem(item.title, newCount);
    }
  };


  return (
    <div className="Addtocart">
      <div className="container">
        <h1>Cart</h1>
        <div>
          {cartItems.length === 0 ? (
            <div className="Addtocart-empty">
              <CiShoppingCart className="fs-4" />
              <span className="">Your cart is currently empty.</span>
            </div>
          ) : (
            <div className="Addtocart-item-list">
              <div className="Addtocart-item-title">
                <p></p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
              </div>
              <br />
              <hr />
              {cartItems.map((item, index) => (
                <div
                  className="Addtocart-item-title  Addtocart-item"
                  key={index}
                >
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <input type="text" value={item.count}  onChange={(event) => handleChange(event, item)} />
                  <p>${(item.price * item.count).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.title)}>x</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
