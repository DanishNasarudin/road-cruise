import { Button } from "@/components/ui/button";
import { HeartIcon, UserCircle2Icon } from "lucide-react";

const AppTopNavbar = () => {
  return (
    <nav className="z-[10] flex justify-between px-4 py-8 items-center">
      <p>Road Cruise</p>
      <div className="flex gap-4">
        <Button
          variant={"ghost"}
          className="hover:bg-transparent w-[24px]"
          size={"icon"}
          asChild
        >
          <HeartIcon />
        </Button>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent w-[24px]"
          size={"icon"}
          asChild
        >
          <UserCircle2Icon />
        </Button>
      </div>
    </nav>
  );
};

export default AppTopNavbar;
