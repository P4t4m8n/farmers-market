import ProductList from "@/components/ui/ProductIndex/ProductList";
import { TruckAnimate } from "@/components/ui/Svgs/AnimtedSvg";
import { queryProducts } from "@/lib/actions/product.actions";
import { getCurrentSeason } from "@/lib/util/app.util";

export default async function Home() {
  const season = getCurrentSeason("northern");
  const seasonProducts = await queryProducts({ season });
  return (
    <>
      {/* Parallax Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('./home.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col  items-center justify-center h-full text-center">
          <h1 className="text-5xl font-title font-bold text-amber-50">
            Welcome to Framer Market
          </h1>
          <p className="mt-4 font-text text-2xl text-yellow-50">
            Your one-stop shop for amazing products!
          </p>
          <button className="border-effect mt-4  z-20 w-[31rem]">
            <span className=" font-title">Start shopping</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className=" h-[200rem]">
        <ProductList products={seasonProducts} />
      </main>
    </>
  );
}
