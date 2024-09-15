import AppNav from "./AppNav";
import UserMenu from "../Profile/UserMenu";
import { LogoSVG } from "../Svgs/LogoSvg";
import { ProductType } from "@prisma/client";

interface Props {
  location: ProductType & "home" & "profile";
}
export default function Header({ location }: Props) {
  return (
    <header className=" h-32  bg-header-gradient mix-blend-overlay p-4 justify-between flex items-end  text-main">
      <div className=" flex items-center flex-col">
        <LogoSVG style={""} />
        <h3 className="font-title font-semibold text-lg text-light_green">The Happy farmer</h3>
      </div>
      <AppNav />
      <UserMenu />
    </header>
  );
}


