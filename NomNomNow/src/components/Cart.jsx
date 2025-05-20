import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import ItemCard from "./ItemCard";
import {useSelector} from 'react-redux'
import { IoCartOutline } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const [activeCart, setActiveCart] = useState(false) ; 

  const cartItems = useSelector((state) => state.cart.cart) ; 

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price, 
    0
  )

  const navigate = useNavigate() ; 

  // console.log('Cart items: ', cartItems)

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 transform transition-transform duration-300 ease-in-out
      ${activeCart ? 'translate-x-0': 'translate-x-full'}
      `}>
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose 
          onClick={() => setActiveCart(!activeCart)}
          className="border-2 border-gray-600 text-gray-600 font-bold  text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out"/>
        </div>

        {
          cartItems.length > 0 ? cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            )
          }) : <h2 className="text-center text-sm font-bold text-gray-800">Your cart is empty!</h2> 
        }

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2"/>
          <button className="bg-green-500 font-bold text-sm px-3 text-white py-2 flex items-center justify-center rounded-lg gap-1 cursor-pointer hover:bg-green-100 hover:text-green-500 transition-colors duration-300 ease-in-out w-[90vw] lg:w-[18vw] mb-5"
          onClick={() => navigate('/success')}
          >
            Checkout <MdOutlineShoppingCartCheckout size={20}/>
          </button>
        </div>
      </div>

      <IoCartOutline
       onClick={() => setActiveCart(!activeCart)}
       className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out hover:bg-green-600 hover:text-white
       ${totalQty > 0 && 'animate-bounce delay-500 transition-all'}
       `}/>
    </>
  );
};

export default Cart;

// 2.06