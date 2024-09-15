import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import { TRoutes } from "@/models/app.model";
import { headers } from "next/headers";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = headers().get("x-next-pathname") as string;
  console.log("pathname:", pathname);
  const location = pathname.split("/")[1] as TRoutes;
  return (
    <main className="">
      <Header location={location} />
      {children}
      <Footer />
    </main>
  );
}
