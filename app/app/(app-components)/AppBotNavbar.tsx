import { cn } from "@/lib/utils";
import { BellIcon, HomeIcon, MapPinPlusIcon } from "lucide-react";
import ButtonNavbar from "./ButtonNavbar";

const AppBotNavbar = () => {
  return (
    <footer
      className={cn(
        "fixed w-full bottom-0 flex justify-evenly py-4 bg-white border-t-zinc-300 border-t-[1px]",
        "shadow-black drop-shadow-[0_-5px_10px_rgba(0,0,0,0.2)]",
        "!max-h-[80px]"
      )}
    >
      <ButtonNavbar name={"Home"} icon={<HomeIcon />} href={"/app"} />
      <ButtonNavbar
        name={"Add Road"}
        icon={<MapPinPlusIcon />}
        href={"/app/add-road"}
      />
      <ButtonNavbar
        name={"Notification"}
        icon={<BellIcon />}
        href={"/app/notification"}
      />
    </footer>
  );
};

export default AppBotNavbar;
