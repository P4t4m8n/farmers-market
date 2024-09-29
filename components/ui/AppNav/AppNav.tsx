"use client";
import { TRoutes } from "@/models/app.model";
import { ProductType } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSVGByName } from "../Svgs/Svgs";
import NavModel from "./NavModel";
import { useMemo } from "react";
import { navModelItemsMap } from "@/lib/constants/NevModelItems";

export default function AppNav() {
  const pathname = usePathname();
  const location = pathname.split("/")[2] || ("/" as TRoutes);
  const modelItemsArr = useMemo(() => navModelItemsMap, []);

  const links = Object.keys(ProductType).map((type) => {
    console.log("type:", type);
    const modelItem = modelItemsArr.get(type as ProductType);
    console.log("modelItem:", modelItem);

    return (
      <div className="relative w-fit group " key={type}>
        <Link
          className={`text-light_green hover-underline-animation flex flex-col items-center relative  ${
            location === type ? " before:w-full " : ""
          }`}
          href={`/products/${type.toLowerCase()}`}
        >
          {getSVGByName(type as ProductType)}
          <span>{`${type}s`.toUpperCase()}</span>
        </Link>
        <NavModel modelItems={modelItem!} />
      </div>
    );
  });

  return (
    <nav className="flex gap-4 font-title font-semibold text-light_green transition-opacity duration-500  ">
      {...links}
    </nav>
  );
}
