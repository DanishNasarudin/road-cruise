import { cn } from "@/lib/utils";
import { Road } from "@/types/Road";
import Link from "next/link";

type Props = {
  data?: Road;
};

const CarouselCard = ({
  data = {
    title: "Title",
    location: "Genting, Pahang.",
    reviews: [],
    reviewAvgRating: 5,
    roadLength: 5,
    roadTime: 10,
  },
}: Props) => {
  return (
    <Link
      href={"/app/road/2"}
      className={cn(
        "bg-white border-[1px] border-zinc-300 rounded-xl overflow-hidden",
        "grid auto-rows-fr !aspect-[3/2] max-h-[200px] w-[300px]"
      )}
    >
      <div className="h-full overflow-hidden">
        <img
          src="https://placehold.co/1280x720"
          alt="cover-img"
          className="w-full"
        />
      </div>
      <div className="h-full p-3 flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-xs font-bold">{data.title}</p>
          <p className="text-xs">{data.location}</p>
          {/* <p className="text-xs">{data.review}</p> */}
        </div>
        <div className="flex gap-2">
          <p className="text-xs">Length: {data.roadLength} km</p>
          <p className="text-xs">|</p>
          <p className="text-xs">Est.: {data.roadTime} mins</p>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
