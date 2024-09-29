import Link from "next/link";
import { LogoSVG } from "../Svgs/LogoSvg";

export default function Logo() {
  return (
    <Link
      key="home"
      href="/"
      className="flex items-center opacity-100 flex-col svg-hover transition-opacity duration-500"
    >
      <LogoSVG style={""} />
      <h3 className="font-title font-semibold text-lg text-light_green">
        The Happy farmer
      </h3>
    </Link>
  );
}
