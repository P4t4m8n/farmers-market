import Image from "next/image";

interface Props {
  text?: string;
  imgUrl?: string;
  svg?: JSX.Element;
  onClick?: () => void;
}
export default function GeneralBtn({ text, imgUrl, svg, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {imgUrl && (
        <Image src={imgUrl} alt={text || "image"} width={64} height={64} />
      )}
      {svg && svg}
      <h3>{text}</h3>
    </button>
  );
}
