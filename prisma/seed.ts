import { createProduct } from "@/lib/actions/product.actions";
import {
  fruits_veggies_data,
  fruits_veggies_dataT,
  fruits_veggies_img,
} from "./data";
import { ProductType, Season } from "@prisma/client";
import { IProductQuantity, TSubTypeUnion } from "@/models/products.model";

export const seed = async () => {
  console.log(fruits_veggies_dataT.length);
  console.log(fruits_veggies_data.length);
  // const promises = fruits_veggies_data.map((product) => {
  //   const imgUrl =
  //     fruits_veggies_img.find((img) => img.name === product.name)?.imageUrl ||
  //     "";
  //   const { season, type } = product;
  //   const productQuantity: IProductQuantity = {
  //     unit: "kg",
  //     price: getRandomPrice(),
  //     unitQuantity: 1,
  //   };

  //   createProduct({
  //     ...product,
  //     imgUrl,
  //     season: season as Season,
  //     type: type as ProductType,
  //     productQuantity: [productQuantity],
  //     subType: product.subType as TSubTypeUnion,
  //   });
  // });
  // await Promise.all(promises);
  // console.log("seeded");
  // return;
};

export const getRandomPrice = (min = 0.99, max = 99.99) => {
  const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(randomPrice);
};
