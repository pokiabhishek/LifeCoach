import React, { useContext } from 'react';
import "./Shop.css";
import { assets } from '../../assets/asset';
import { CartContext } from '../../Context/Cartcontext';

const book = [
    { 
      img: assets.book1 ,
      title:"The Power of Positive Thinking",
      price:29.00,
    },
    { 
      img: assets.book2,
      title:"Don’t Sweat the Small Stuff",
      price:29.00
    },
    { 
      img: assets.book3,
      title:"Find Yourself",
      price:29.00
    },
    { 
      img: assets.book4,
      title:"Inspire",
      price:29.00
    },
    { 
      img: assets.book5,
      title:"Awaken the Giant Within",
      price:29.00
    },
    { 
      img: assets.book6,
      title:"What Motivates Us",
      price:29.00
    }
];

const Shop = () => {
  const{addToCart} = useContext(CartContext);

  return (
    <div className='Shop'>
      <div className="container">
        <div className="row">
            <h1 className="text-center mt-5">Shop</h1>
            {book.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="book-item">
                        <img src={item.img} alt={`Book ${index + 1}`} className="book-img" />
                        <button className="add-to-cart text-uppercase" onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                    <h2 className='text-center'>{item.title}</h2>
                    <span className='d-flex justify-content-center'>{item.price}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
