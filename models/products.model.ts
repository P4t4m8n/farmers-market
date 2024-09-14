import { ProductType, Quantity, Season } from "@prisma/client";

export interface IProduct {
  id?: number;
  name: string;
  imgUrl: string;
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
  productQuantity: IProductQuantity[];
}

export interface IProductQuantity {
  id?: number;
  productId?: number;
  unitQuantity?: number| null;
  unitAmountType?: Quantity | null;
  unit: Quantity;
  price: number;
}

export type TProductFilter = {
  filterType?: ProductType;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "price" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
  season?: Season;
};
