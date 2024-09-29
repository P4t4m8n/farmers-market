import GeneralBtn from "@/components/shared/GeneralBtn";
import GeneralLink from "@/components/shared/GeneralLink";
import { IModelItems } from "@/models/app.model";

interface Props {
  modelItems: IModelItems[];
}

export default function NavModel({ modelItems }: Props) {
  return (
    <ul className=" bg-head absolute p-4 top-18 left-0 w-fit hidden rounded-lg transition-all duration-300 columns-2  group-hover:block group-hover:h-fit">
      {modelItems.map((item, index) => (
        <li key={index}>
          {item.link && (
            <GeneralLink
              link={item.link}
              text={item.text}
              imgUrl={item.iconImg}
              svg={item.iconSvg}
            />
          )}
          {item.onClick && (
            <GeneralBtn
              text={item.text}
              imgUrl={item.iconImg}
              svg={item.iconSvg}
              onClick={item.onClick}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
