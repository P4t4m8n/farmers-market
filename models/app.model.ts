import { ProductType } from "@prisma/client";

export type TRoutes = ProductType & "/" & "profile";

export interface IModelItems {
  link?: string;
  onClick?: () => void;
  text?: string;
  iconSvg?: JSX.Element;
  iconImg?: string;
}



