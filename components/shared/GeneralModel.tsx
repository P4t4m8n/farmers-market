import { IModelItems } from "@/models/app.model";
import GeneralLink from "./GeneralLink";
import GeneralBtn from "./GeneralBtn";

interface Props {
  modelItems: IModelItems[];
}

export default function NavModelUI({ modelItems }: Props) {
  return (
    <ul>
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
