
"use client"
import { useState} from "react"
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";

const Header = () => {
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between gap-10 container mx-auto py-7">
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
        />
        <nav className="flex gap-24 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-orange-500 after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>
        <div className=" relative flex gap-10">
          <FiSearch size={24} />

          <button
            onClick={()=>setIsCartPopupOpen(!isCartPopupOpen)}
           className="relative cursor-pointer">
            <FiShoppingBag size={24} />
            <div className="bg-orange-500 rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
            
          </button>
          {isCartPopupOpen&& <CartPopup/>}
        
        </div>
         
      </div>
    </header>
  );
};

export default Header;
