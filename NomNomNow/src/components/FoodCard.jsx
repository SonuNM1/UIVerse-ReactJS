import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({id, name, price, desc, img, rating, handleToast}) => {

  const dispatch = useDispatch() ; 

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg ml-6">
      <img
        src={img}
        alt="food_image"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mb-2"
      />
      <div className="text-sm flex justify-between mb-3">
        <h2>{name}</h2>
        <span className="text-green-500" >₹ {price}</span>
      </div>
      <p className="text-sm font-normal">
        {desc.slice(0,50)}...
      </p>
      <div className="mt-3 flex justify-between">
        <span className="flex justify-center items-center " >
          <FaRegStar className="mr-1 text-yellow-400"/> {rating}
        </span>
        <button 
        onClick={() => {
          dispatch(addToCart({
            id,
            name, 
            price,
            rating,
            img,
            qty: 1 
          }))
          handleToast(name) ; 
        }}
        className="p-1 bg-white text-green-500 border rounded-lg hover:bg-green-500 hover:text-white cursor-pointer text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
