"use client";
import { TRoutes } from "@/models/app.model";
import { ProductType } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppNav() {
  const pathname = usePathname();
  const location = pathname.split("/")[2] || ("/" as TRoutes);
  console.log("location:", location);

  const links = Object.keys(ProductType).map((type) => {
    return (
      <Link
        className={`${
          location === type
            ? "hover-underline-animation before:w-full  text-light_green"
            : "hover-underline-animation  text-light_green"
        }`}
        key={type}
        href={`/products/${type.toLowerCase()}`}
      >
        {`${type}s`.toUpperCase()}
      </Link>
    );
  });

  links.unshift(
    <Link
      className={`${
        location === "/"
          ? "hover-underline-animation before:w-full  text-light_green"
          : "hover-underline-animation  text-light_green"
      }`}
      key="home"
      href="/"
    >
      HOME
    </Link>
  );

  return (
    <nav className="flex gap-4 font-title font-semibold text-light_green   ">
      {...links}
    </nav>
  );
}
