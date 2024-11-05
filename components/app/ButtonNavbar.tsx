"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  icon: JSX.Element;
  href: string;
};

const ButtonNavbar = ({
  name = "NavName",
  icon = <CarIcon />,
  href = "/",
}: Props) => {
  const pathname = usePathname();

  const checkRoute = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex-1 flex flex-col gap-1 items-center",
        checkRoute && "text-red-500 transition-colors"
      )}
    >
      <Button
        className="hover:bg-transparent w-[28px] transition-colors"
        size={"icon"}
        variant={"ghost"}
        asChild
      >
        {icon}
      </Button>
      <p className="text-[10px]">{name}</p>
    </Link>
  );
};

export default ButtonNavbar;
