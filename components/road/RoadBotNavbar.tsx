import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShareIcon } from "lucide-react";

const RoadBotNavbar = () => {
  // Need to add function to check if user location is at the starting point or not
  // If not, then Start Drive button change to Go to Starting Point
  return (
    <footer
      className={cn(
        "z-[10] fixed w-full bottom-0 py-4 bg-white border-t-zinc-300 border-t-[1px]",
        "shadow-black drop-shadow-[0_-5px_10px_rgba(0,0,0,0.2)]",
        "flex gap-2 px-6 max-h-[80px]"
      )}
    >
      <Button className={cn("w-full h-12 rounded-xl font-bold", "bg-blue-400")}>
        Start Drive
      </Button>
      <Button className={"h-12 rounded-xl"} variant={"outline"}>
        <ShareIcon />
      </Button>
    </footer>
  );
};

export default RoadBotNavbar;
