"use server";

import { IProduct, TProductFilter } from "@/models/products.model";
import prisma from "@/prisma/prisma";

export const queryProducts = async ({
  filterType,
  minPrice = 0,
  maxPrice = 999999,
  sortBy = "price",
  sortOrder = "asc",
  page = 1,
  limit = 200,
}: TProductFilter): Promise<IProduct[]> => {
  try {
    const offset = (page - 1) * limit;

    const products = await prisma.product.findMany({
      where: {
        type: filterType,
        price: {
          gte: minPrice,
          lte: maxPrice,
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip: offset,
      take: limit,
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Error querying products");
  }
};

export const getProductById = async (id: number): Promise<IProduct> => {
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: { id },
    });

    return product;
  } catch (error) {
    throw new Error(`Error fetching product: ${error}`);
  }
};

export const createProduct = async (
  product: Partial<IProduct>
): Promise<IProduct> => {
  try {
    const newProduct = await prisma.product.create({
      data: product,
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
    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: product,
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
