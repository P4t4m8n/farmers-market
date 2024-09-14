"use client";

import { IProduct } from "@/models/products.model";
import { useRef, useState } from "react";
import { MinusSvg, PlusSvg } from "../Svgs/Svgs";

interface Props {
  product: IProduct;
}
export default function ProductPreviewActions({ product }: Props) {
  const [quantityTypes, setQuantityTypes] = useState(product.productQuantity);

  const [amount, setAmount] = useState(0);
  const quantityTypesIdx = useRef(0);

  const handleChangeQuantityType = (i: number) => {
    quantityTypesIdx.current = i;
    setQuantityTypes([...quantityTypes]);
  };

  const idx = quantityTypesIdx.current;
  return (
    <>
      <h4 className=" font-title font-medium text-lg text-main">{`$${quantityTypes[idx].price} - ${quantityTypes[idx].unit} `}</h4>
      <p className="font-text text-secondary ">{product.description}</p>
      <h5>
        {quantityTypes[idx]?.unitAmountType
          ? `${quantityTypes[idx].unitAmountType} ${quantityTypes[idx].unitQuantity}`
          : ""}
      </h5>
      <div className=" flex items-center justify-between">
        <div className="flex items-center  gap-2 ">
          <button
            className="w-6 h-6 border rounded-full "
            disabled={!amount}
            onClick={() => setAmount((prev) => prev - 1)}
          >
            <MinusSvg />
          </button>
          <h5>{amount}</h5>
          <button
            className="w-6 h-6 border rounded-full "
            onClick={() => setAmount((prev) => prev + 1)}
          >
            <PlusSvg />
          </button>
        </div>
        <ul>
          {quantityTypes.map((quantityType, i) => (
            <li key={i}>
              <button
                className=" w-12 h-6 text-center bg-brown text-secondary rounded-3xl "
                onClick={() =>
                  handleChangeQuantityType((quantityTypesIdx.current = i))
                }
              >
                {quantityType.unit}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
