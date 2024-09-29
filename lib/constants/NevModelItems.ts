import { getSVGByName } from "@/components/ui/Svgs/Svgs";
import { IModelItems } from "@/models/app.model";
import {
  VEGETABLES_SUB_TYPE,
  FRUITS_SUB_TYPE,
  ROOTS_SUB_TYPE,
  HERBS_SUB_TYPE,
  LEGUMES_SUB_TYPE,
  NUTS_SUB_TYPE,
  SPICES_SUB_TYPE,
  OTHERS_SUB_TYPE,
} from "@/models/products.model";
import { ProductType } from "@prisma/client";

export const navModelItemsMap: Map<ProductType, IModelItems[]> = new Map([
  [
    ProductType.vegetable,
    VEGETABLES_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.vegetable}/${subType}`,
      };
    }),
  ],
  [
    ProductType.fruit,
    FRUITS_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.fruit}/${subType}`,
      };
    }),
  ],
  [
    ProductType.root,
    ROOTS_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.root}/${subType}`,
      };
    }),
  ],
  [
    ProductType.herb,
    HERBS_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.herb}/${subType}`,
      };
    }),
  ],
  [
    ProductType.legume,
    LEGUMES_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.legume}/${subType}`,
      };
    }),
  ],
  [
    ProductType.nut,
    NUTS_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.nut}/${subType}`,
      };
    }),
  ],
  [
    ProductType.spice,
    SPICES_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.spice}/${subType}`,
      };
    }),
  ],
  [
    ProductType.other,
    OTHERS_SUB_TYPE.map((subType): IModelItems => {
      return {
        text: subType.substring(0, 1).toUpperCase() + subType.substring(1),
        iconSvg: getSVGByName(subType),
        link: `/products/${ProductType.other}/${subType}`,
      };
    }),
  ],
]);
