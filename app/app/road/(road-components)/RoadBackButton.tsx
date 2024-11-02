"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const RoadBackButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      className="z-[1] rounded-full absolute top-4 left-4 w-10 h-10"
      variant={"secondary"}
      onClick={() => router.back()}
    >
      <ChevronLeftIcon strokeWidth={3} />
    </Button>
  );
};

export default RoadBackButton;
