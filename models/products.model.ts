import { ProductType, Season } from "@prisma/client";

export interface IProduct {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  season: Season;
  type: ProductType;
  family: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  vitamins: string[];
  minerals: string[];
}

export type TProductFilter = {
  filterType?: ProductType;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "price" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
};
