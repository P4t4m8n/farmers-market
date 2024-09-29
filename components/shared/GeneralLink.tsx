import Image from "next/image";
import Link from "next/link";

interface Props {
  link: string;
  text?: string;
  imgUrl?: string;
  svg?: JSX.Element;
}
export default function GeneralLink({ text, imgUrl, svg, link }: Props) {
  return (
    <Link className="flex gap-4 p-2" href={link}>
      {imgUrl && (
        <Image src={imgUrl} alt={text || "image"} width={64} height={64} />
      )}
      {svg && svg}
      <h3>{text}</h3>
    </Link>
  );
}
