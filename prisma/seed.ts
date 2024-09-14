import { createProduct, queryProducts } from "@/lib/actions/product.actions";
import { fruits_veggies_data, fruits_veggies_img } from "./data";
import { ProductType, Season } from "@prisma/client";

export const seed = async () => {
  const promises = fruits_veggies_data.map((product) => {
    const imgUrl =
      fruits_veggies_img.find((img) => img.name === product.name)?.imageUrl ||
      "";
    const { season, type } = product;
    createProduct({
      ...product,
      imgUrl,
      season: season as Season,
      type: type as ProductType,
      price: getRandomPrice(),
    });
  });
  await Promise.all(promises);
  const products = await queryProducts({});
  console.log("seeded");
  return products;
};

export const getRandomPrice = (min = 0.99, max = 99.99) => {
  const randomPrice = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(randomPrice);
};
