import { ProductType, Quantity, Season } from "@prisma/client";

export interface IProduct {
  id?: number;
  name: string;
  imgUrl?: string;
  season: Season;
  type: ProductType;
  subType: TSubTypeUnion;
  family: string;
  description: string;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  vitamins: string[];
  minerals: string[];
  productQuantity?: IProductQuantity[];
}
export interface IProductQuantity {
  id?: number;
  productId?: number;
  unitQuantity?: number | null;
  unitAmountType?: Quantity | null;
  unit: Quantity;
  price: number;
}

export type TProductFilter = {
  filterType?: ProductType;
  subType?: TSubTypeUnion[];
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "price" | "name";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
  season?: Season;
};

//Subtypes as types instead of enum for easy update and change
export type TSubTypeUnion =
  | TVegetableSubType
  | TRootSubType
  | TFruitSubType
  | TLegumeSubType
  | TNutSubType
  | TSpiceSubType
  | TOtherSubType
  | THerbSubType;

export type TVegetableSubType = (typeof VEGETABLES_SUB_TYPE)[number];
export type TRootSubType = (typeof ROOTS_SUB_TYPE)[number];
export type TFruitSubType = (typeof FRUITS_SUB_TYPE)[number];
export type THerbSubType = (typeof HERBS_SUB_TYPE)[number];
export type TLegumeSubType = (typeof LEGUMES_SUB_TYPE)[number];
export type TNutSubType = (typeof NUTS_SUB_TYPE)[number];
export type TSpiceSubType = (typeof SPICES_SUB_TYPE)[number];
export type TOtherSubType = (typeof OTHERS_SUB_TYPE)[number];

export const VEGETABLES_SUB_TYPE = [
  "leafy Greens",
  "cruciferous",
  "nightshades",
  "gourds",
  "sea vegetables",
  "mushrooms",
] as const;
export const ROOTS_SUB_TYPE = [
  "carrots",
  "potatoes",
  "onions",
  "alliums",
] as const;
export const FRUITS_SUB_TYPE = [
  "pomes",
  "stone Fruits",
  "tropical",
  "berries",
  "citrus",
] as const;
export const HERBS_SUB_TYPE = [
  "aromatic Herbs",
  "medicinal Herbs",
  "culinary Herbs",
  "perennial Herbs",
] as const;
export const LEGUMES_SUB_TYPE = [
  "beans",
  "lentils",
  "peas",
  "soy Products",
] as const;
export const NUTS_SUB_TYPE = [
  "tree Nuts",
  "ground Nuts",
  "pine Nuts",
  "exotic Nuts",
] as const;
export const SPICES_SUB_TYPE = [
  "hot Spices",
  "sweet Spices",
  "aromatic Spices",
  "seeds",
] as const;
export const OTHERS_SUB_TYPE = [" "] as const;
