import { queryProducts } from "@/lib/actions/product.actions";
import Image from "next/image";

export default async function Home() {
  const products = await queryProducts({});
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Image
              unoptimized
              width={360}
              height={360}
              src={product.imgUrl}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
