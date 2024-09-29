import Parallax from "@/components/shared/Parallax";
import { IProduct } from "@/models/products.model";
import ProductList from "../ProductIndex/ProductList";

interface Props {
  seasonProducts: IProduct[];
}

export default function HomeCmp({ seasonProducts }: Props) {
  return (
    <section className="z-0 relative"  >
   
      <Parallax backgroundName="main">
        <div className="relative  flex flex-col  items-center justify-center h-full text-center">
          <h1 className="text-5xl font-title font-bold text-amber-50">
            Welcome to Framer Market
          </h1>
          <p className="mt-4 font-text text-2xl text-yellow-50">
            Your one-stop shop for amazing products!
          </p>
          <button className="border-effect mt-4  z-10 w-[31rem]">
            <span className=" font-title text-center">Start shopping</span>
          </button>
        </div>
      </Parallax>
    

      {/* Season products */}
      <div className=" h-[200rem]">
        <ProductList products={seasonProducts} />
      </div>
    </section>
  );
}
