import { CarIcon } from "lucide-react";

type Props = {
  title?: string;
  value?: string;
  icon?: JSX.Element;
};

const RoadDetailCell = ({
  title = "Title Testing",
  value = "5KM",
  icon = <CarIcon size={18} />,
}: Props) => {
  return (
    <div className="flex-1 w-full flex flex-col gap-2 items-center">
      <div className="flex gap-1 items-center">
        {icon}
        <p className="text-[10px]">{title}</p>
      </div>
      <p className="text-base font-bold">{value}</p>
    </div>
  );
};

export default RoadDetailCell;
