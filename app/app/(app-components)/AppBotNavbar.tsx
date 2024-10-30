import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BellIcon, HomeIcon, MapPinPlusIcon } from "lucide-react";

type Props = {};

const AppBotNavbar = (props: Props) => {
  return (
    <footer
      className={cn(
        "fixed w-full bottom-0 flex justify-evenly py-4 bg-white border-t-zinc-300 border-t-[1px]",
        "drop-shadow-[0,35px,35px,rgba(0,0,0,0.5)]"
      )}
    >
      <div className="flex-1 flex flex-col gap-1 items-center">
        <Button
          className="hover:bg-transparent w-[28px]"
          size={"icon"}
          variant={"ghost"}
          asChild
        >
          <HomeIcon />
        </Button>
        <p className="text-[10px]">Home</p>
      </div>
      <div className="flex-1 flex flex-col gap-1 items-center">
        <Button
          className="hover:bg-transparent w-[28px]"
          size={"icon"}
          variant={"ghost"}
          asChild
        >
          <MapPinPlusIcon />
        </Button>
        <p className="text-[10px]">Add Road</p>
      </div>
      <div className="flex-1 flex flex-col gap-1 items-center">
        <Button
          className="hover:bg-transparent w-[28px]"
          size={"icon"}
          variant={"ghost"}
          asChild
        >
          <BellIcon />
        </Button>
        <p className="text-[10px]">Notification</p>
      </div>
    </footer>
  );
};

export default AppBotNavbar;
