export default function ProductDetail({
  params,
}: Readonly<{ params: { id: string } }>) {
  return <main>{params.id}</main>;
}
