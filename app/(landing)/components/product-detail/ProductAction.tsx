"use client"
import {
  FiShoppingBag,
  FiArrowRight,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState} from "react";
import { useRouter } from "next/navigation"; 




function ProductAction() {
   const { push } = useRouter();
    const[qty,setQty]=useState(1)
     const checkout = () => {};


  return (
    <>
      <div className="text-white flex  gap-5">
        <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
          <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center text-black">
            <span>{qty}</span>
          </div>
          <div className="flex flex-col text-black">
            <button 
            onClick={()=>setQty(qty+1)}
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center">
              <FiChevronUp />
            </button>
            <button 
            onClick={()=>setQty(qty>1?qty-1:qty)}
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center">
              <FiChevronDown />
            </button>
          </div>
        </div>
        <Button className=" w-full bg-orange-500 ml-3">
          <FiShoppingBag size={24} />
          Add to Cart
        </Button>
        <Button className=" w-full bg-black mr-2.5" 
         onClick={() => push("/checkout")}>
          Checkout Now
          <FiArrowRight size={24} />
        </Button>
      </div>
    </>
  );
}

export default ProductAction;
