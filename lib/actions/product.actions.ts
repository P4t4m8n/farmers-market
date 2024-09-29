"use server";

import { IProduct, TProductFilter } from "@/models/products.model";
import prisma from "@/prisma/prisma";

export const queryProducts = async ({
  filterType,
  minPrice = 0,
  maxPrice = 999999,
  sortBy = "name",
  sortOrder = "asc",
  page = 1,
  season,
  limit = 15,
}: TProductFilter): Promise<IProduct[]> => {
  try {
    const offset = (page - 1) * limit;
    const { select } = _getProductSelect();

    const products = await prisma.product.findMany({
      where: {
        type: filterType,
        season,
        productQuantity: {
          some: {
            price: {
              gte: minPrice,
              lte: maxPrice,
            },
          },
        },
      },
      skip: offset,
      take: limit,
      select,
    });

    const sortedProducts = _orderProducts(products, sortBy, sortOrder);

    return sortedProducts;
  } catch (error) {
    console.error(error);
    throw new Error("Error querying products");
  }
};

export const getProductById = async (id: number): Promise<IProduct> => {
  try {
    const { select } = _getProductSelect();

    const product = await prisma.product.findUniqueOrThrow({
      where: { id },
      select,
    });

    return product;
  } catch (error) {
    throw new Error(`Error fetching product: ${error}`);
  }
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  try {
    const { select } = _getProductSelect();
    const newProduct: IProduct = await prisma.product.create({
      data: {
        ...product,
        productQuantity: { create: product.productQuantity },
      },
      select,
    });

    return newProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error}`);
  }
};

export const updateProduct = async (
  product: Partial<IProduct>
): Promise<IProduct> => {
  try {
    const { select } = _getProductSelect();

    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: {
        name: product.name,
        imgUrl: product.imgUrl,
        season: product.season,
        type: product.type,
        family: product.family,
        description: product.description,
        calories: product.calories,
        protein: product.protein,
        fat: product.fat,
        carbohydrates: product.carbohydrates,
        fiber: product.fiber,
        vitamins: product.vitamins,
        minerals: product.minerals,

        productQuantity: {
          upsert: product.productQuantity?.map((pq) => ({
            where: { id: pq.id },
            update: {
              unitQuantity: pq.unitQuantity,
              unitAmountType: pq.unitAmountType,
              unit: pq.unit,
              price: pq.price,
            },
            create: {
              productId: product.id,
              unitQuantity: pq.unitQuantity,
              unitAmountType: pq.unitAmountType,
              unit: pq.unit,
              price: pq.price,
            },
          })),
        },
      },
      select,
    });

    return updatedProduct;
  } catch (error) {
    throw new Error(`Error updating product: ${error}`);
  }
};

export const removeProduct = async (id: number): Promise<void> => {
  try {
    await prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error(`Error deleting product: ${error}`);
  }
};

const _getProductSelect = () => {
  return {
    select: {
      id: true,
      name: true,
      imgUrl: true,
      season: true,
      type: true,
      family: true,
      description: true,
      calories: true,
      protein: true,
      fat: true,
      carbohydrates: true,
      fiber: true,
      vitamins: true,
      minerals: true,
      productQuantity: {
        select: {
          id: true,
          productId: true,
          unitQuantity: true,
          unitAmountType: true,
          unit: true,
          price: true,
        },
      },
    },
  };
};

const _orderProducts = (
  products: IProduct[],
  sortBy: "name" | "price",
  sortOrder: "asc" | "desc"
) => {
  return products.sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return sortOrder === "asc"
        ? a.productQuantity[0].price - b.productQuantity[0].price
        : b.productQuantity[0].price - a.productQuantity[0].price;
    }
  });
};
