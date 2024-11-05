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
import { Road } from "@/types/Road";
import { CarIcon, HeartIcon, SplineIcon, TimerIcon } from "lucide-react";
import React from "react";
import RoadCarousel from "./RoadCarousel";
import RoadDetailCell from "./RoadDetailCell";

type Props = {
  data?: Road;
};

const snapPoints = ["400px", "600px", 1];

const RoadDrawer = ({
  data = {
    title: "Testing Title",
    location: "Testing Location",
    reviews: [],
    reviewAvgRating: 0,
    roadLength: 1340,
    roadTime: 210,
  },
}: Props) => {
  const [snap, setSnap] = React.useState<number | string | null>(snapPoints[0]);

  // Calculate roadTime if its more than 60mins -------------------

  const roadTimeHrs = Math.floor(data.roadTime / 60);

  const roadTimeMins =
    (data.roadTime / 60 - Math.floor(data.roadTime / 60)) * 60;

  const roadTimeString = `${roadTimeHrs} ${roadTimeHrs > 1 ? `Hrs` : `Hr`} ${
    roadTimeMins > 0 ? `${roadTimeMins.toFixed(0)} Mins` : ``
  }`;

  // Calculate roadLength if its more than 1000meters --------------

  const roadLengthKm = data.roadLength / 1000;

  const roadLengthString = `${
    data.roadLength >= 1000
      ? `${roadLengthKm.toFixed(2)} KM`
      : `${data.roadLength} Meters`
  }`;

  // ++ Need a server function to check if the road displayed is their favourite -----

  const checkFavourite = false;

  // ++ Need a server function that takes the user id and road id, then add to userFavRoad ----

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
                  <DrawerTitle>{data.title}</DrawerTitle>
                  <DrawerDescription>{data.location}</DrawerDescription>
                </div>
                <Button
                  variant={"ghost"}
                  className="hover:bg-transparent w-[24px]"
                  size={"icon"}
                  asChild
                  // onclick server function to add to favourite ---
                >
                  <HeartIcon />
                </Button>
              </section>
              <div className="px-6 py-6">
                <div className="w-full h-[1px] bg-zinc-300" />
              </div>
              <section className="px-6 flex">
                <RoadDetailCell
                  title={"Road Length"}
                  value={roadLengthString}
                  icon={<CarIcon size={18} />}
                />
                <RoadDetailCell
                  title={"Travel Time"}
                  value={
                    data.roadTime >= 60
                      ? roadTimeString
                      : `${data.roadTime} Mins`
                  }
                  icon={<TimerIcon size={18} />}
                />
                <RoadDetailCell
                  title={"Road Type"}
                  value={"Loop"}
                  icon={<SplineIcon size={18} />}
                />
              </section>
              <RoadCarousel />
              {/* Anything below here is placeholder for reviews */}
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
