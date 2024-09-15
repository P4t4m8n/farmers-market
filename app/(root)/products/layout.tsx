export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { [key: string]: string };
}) {
  console.log("params:", params)
  return <section>{children}</section>;
}
