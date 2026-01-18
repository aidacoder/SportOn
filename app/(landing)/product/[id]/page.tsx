import Image from "next/image";
import ProductAction from "../../components/product-detail/ProductAction";
import priceFormatter from "@/app/utils/price-formatter";


function ProductDetail() {
  return (
    <>
      <main className="container mx-auto py-40 flex gap-12">
        <div className="bg-gray- min-w-140 flex justify-center items-center">
          <Image
            src="/images/products/product4.png"
            width={550}
            height={550}
            alt="product 4 image"
            className="aspect-square object-contain  bg-red-50 w-full"
          />
        </div>

        <div className=" w-full py-7">
          <h1 className="text-5xl font-bold mb-6">SportsOn HyperSoccer v2</h1>
          <button className="text-orange-500 rounded-full bg-red-50  py-2 px-6">
            Football
          </button>
          <p className="leading-loose mb-8">
            The SportsOn HyperSoccer v2 is engineered for the player who demands
            precision, power, and unrivaled speed onthe pitch. Featuring a
            striking, two-toned black and white design with deep crimson
            accents, these cleats don't just perform—they make a statement.
            Experience the future of football footwear with v2's enhanced fit
            and cutting-edge traction.
          </p>

            <div className="text-orange-500 text-[32px] font-semibold mb-12">
          {priceFormatter(458000)}
        </div>
        <ProductAction></ProductAction>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
