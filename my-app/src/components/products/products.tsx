import Image from "next/image";
import Leaf from "../../../public/images/leaf.png";
import ProductsSlider from "./productsSlider";

const Products = () => {
  return (
    <div className="relative bg-primary-main min-h-24 pl-[230px] pt-[120px]">
      <Image
        src={Leaf}
        alt="leaf"
        width={350}
        height={319}
        className="absolute left-[158px] top-[-140px]"
      />
      <div className="flex flex-col gap-6">
        <div className="gap-4 flex flex-col">
          <h1 className="text-text-main text-4xl z-[500]">
            CHEF MATT PRODUCTS
          </h1>
          <hr className="border-2 border-text-main w-[548px]" />
        </div>
        <h1 className="text-white text-lg w-[578px]">
          Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
          yourself and Thank us later.
        </h1>
      </div>
      <ProductsSlider />
    </div>
  );
};

export default Products;
