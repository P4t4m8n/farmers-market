import { GrocerySvg } from "../Svgs/Svgs";

export default function CartSliderBtn() {
  return (
    <button className=" group fixed z-40 bg-brown w-20 h-20 top-1/2 -translate-y-1/2 right-0 hover:w-28 transition-transform-width transition-all duration-300  ">
      <div className=" relative h-full w-full flex justify-start">
        <GrocerySvg />
        <div className=" w-10  bg-brown h-full absolute rounded-l-full -left-10  "></div>
      </div>
      <div className="h-[100vh] w-0 group-hover:w-10 cart-top fixed right-0 bg-brown transition-transform-width transition-all duration-300 "></div>
    </button>
  );
}
