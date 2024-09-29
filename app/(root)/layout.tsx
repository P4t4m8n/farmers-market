import CartSliderBtn from "@/components/ui/Cart/CartSliderBtn";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" relative">
      <Header />
      <CartSliderBtn />
      {children}
      <Footer />
    </main>
  );
}
