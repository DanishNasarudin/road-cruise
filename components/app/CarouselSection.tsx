import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Road } from "@/types/Road";
import CarouselCard from "./CarouselCard";

type Props = {
  title?: string;
  data?: Road[];
};

const CarouselSection = ({
  title = "Title For Carousel Section",
  data = [
    {
      title: "Title",
      location: "Genting, Pahang.",
      reviews: [],
      reviewAvgRating: 5,
      roadLength: 5,
      roadTime: 10,
    },
    {
      title: "Title2",
      location: "Pulau Penang, Malaysia.",
      reviews: [],
      reviewAvgRating: 5,
      roadLength: 5,
      roadTime: 10,
    },
    {
      title: "Title3",
      location: "Segamat, Johor.",
      reviews: [],
      reviewAvgRating: 5,
      roadLength: 5,
      roadTime: 10,
    },
  ],
}: Props) => {
  return (
    <section className="py-4 flex flex-col gap-4">
      <h3 className="px-4 text-base font-bold">{title}</h3>
      <Carousel className="w-full max-w-[100vw] [&>div]:px-4">
        <CarouselContent className="[&>div]:basis-auto ">
          {data.map((item: Road, index: number) => (
            <CarouselItem key={index}>
              <CarouselCard data={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
