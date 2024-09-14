import { IProduct } from "@/models/products.model";
import ProductPreview from "./ProductPreview";

interface Props {
  products: IProduct[];
}
export default function ProductList({ products }: Props) {
  return (
    <ul className="flex flex-wrap justify-center gap-6 ">
      {products.map((product, index) => (
        <ProductPreview product={product} key={index} index={index} />
      ))}
    </ul>
  );
}
