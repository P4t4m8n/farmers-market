import { ProductType } from "@prisma/client";

export default async function ProductIndex({
  params,
}: {
  params: { type: ProductType };
}) {
  console.log("params:", params)
  return <div>page</div>;
}
