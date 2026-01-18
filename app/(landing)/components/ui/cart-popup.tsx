import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "./button";
import { FiTrash2 ,FiArrowRight} from "react-icons/fi";
 export const CartList = [
  {
    name: "SportsOn Product 1",
    category: "Running",
    price: 50000,
    qty: 1,
    imgUrl: "product1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Tennis",
    price: 50000,
    qty: 1,
    imgUrl: "product2.png",
  },
  {
    name: "SportsOn Product 3",
    category: "Running",
    price: 50000,
    qty: 1,
    imgUrl: "product3.png",
  },
];

function CartPopup() {
  const totalprice = CartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  return (
    <>
      <div className="absolute bg-white right-0 top-12 shadow-xl border-e-gray-200 w-90 z-10">
        <div className="p-4 border-b border-gray-200 font-bold text-center">
          Shopping Cart
        </div>

        {CartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 gap 3 flex" key={index}>
            <div className="bg-red-50 aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>

            <div className="self-center">
              <div className=" text-sm font-medium">{item.name}</div>
              <div className="gap-3 flex font-medium text-xs">
                <div>{item.qty}X</div>
                <div className="text-orange-500">
                  {priceFormatter(item.price)}
                </div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center ml-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            <div className="text-orange-500 text-xs">
              {priceFormatter(totalprice)}
            </div>
          </div>
           <Button
          variant="dark"
          size="small"
          className="w-full mt-4 bg-black"
          
        >
          Checkout Now <FiArrowRight />
        </Button>
        </div>
      </div>
    </>
  );
}

export default CartPopup;
