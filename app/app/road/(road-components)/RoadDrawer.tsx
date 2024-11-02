"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerPortal,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { HeartIcon } from "lucide-react";
import React from "react";
import RoadCarousel from "./RoadCarousel";
import RoadDetailCell from "./RoadDetailCell";

const snapPoints = ["400px", "600px", 1];

const RoadDrawer = () => {
  const [snap, setSnap] = React.useState<number | string | null>(snapPoints[0]);

  const modalTrigger = snap === 1 ? true : false; // CHECK THIS WHY IS IT NOT WORKING

  return (
    <>
      <Drawer
        open={true}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
        modal={false}
      >
        <DrawerPortal>
          <DrawerContent
            content={"content"}
            className="z-[1] fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-3xl bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]"
          >
            <div
              className={cn(
                snap === 1 &&
                  "overflow-y-auto gradient-mask-t-[rgba(0,0,0,1)_96%]"
              )}
            >
              <section className="px-6 pt-6 flex justify-between align-middle">
                <div className="flex flex-col gap-2">
                  <DrawerTitle>Testing</DrawerTitle>
                  <DrawerDescription>Location heree</DrawerDescription>
                </div>
                <Button
                  variant={"ghost"}
                  className="hover:bg-transparent w-[24px]"
                  size={"icon"}
                  asChild
                >
                  <HeartIcon />
                </Button>
              </section>
              <div className="px-6 py-6">
                <div className="w-full h-[1px] bg-zinc-300" />
              </div>
              <section className="px-6 flex">
                <RoadDetailCell title={"Road Length"} value={"5 KM"} />
                <RoadDetailCell title={"Travel Time"} value={"10 Mins"} />
                <RoadDetailCell title={"Road Type"} value={"Loop"} />
              </section>
              <RoadCarousel />
              <RoadCarousel />
              <RoadCarousel />
              <RoadCarousel />
              <RoadCarousel />
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </>
  );
};

export default RoadDrawer;
