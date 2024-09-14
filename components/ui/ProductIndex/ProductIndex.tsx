import { IProduct } from "@/models/products.model";

interface Props {
  products: IProduct[];
}
export default function ProductIndex({ products }: Props) {
  return <div>ProductIndex</div>;
}
