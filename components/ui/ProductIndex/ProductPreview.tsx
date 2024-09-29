"use client"; 

import { useEffect, useRef, useState } from "react";
import { IProduct } from "@/models/products.model";
import Image from "next/image";
import ProductPreviewActions from "./ProductPreviewActions";

interface Props {
  product: IProduct;
  index: number;
}

export default function ProductPreview({ product, index }: Props) {
  const { name, imgUrl } = product;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <li
      ref={ref}
      className={`w-72 p-4 z-0 border rounded-md overflow-hidden shadow-md  slide-in  flex flex-col gap-2 group hover:cursor-pointer hover:bg-light_yellow transition-colors duration-300 ${
        isVisible ? "" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Image
        width={360}
        height={360}
        src={imgUrl || "/home.jpg"}
        alt={name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-md aspect-square object-fill group-hover:scale-105  transition-transform duration-300 overflow-hidden"
      />
      <h3 className=" font-title text-xl font-bold text-main ">{name}</h3>
      <ProductPreviewActions product={product} />
    </li>
  );
}
