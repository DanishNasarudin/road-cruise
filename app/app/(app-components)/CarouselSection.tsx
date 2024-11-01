import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";

type Props = {
  title?: string;
  data?: any;
};

const CarouselSection = ({
  title = "Title For Carousel Section",
  data = [
    {
      title: "Title",
      location: "Genting, Pahang.",
      review: "review",
      road_length: 5,
      road_time: 10,
    },
    {
      title: "Title2",
      location: "Pulau Penang, Malaysia.",
      review: "review",
      road_length: 4,
      road_time: 20,
    },
    {
      title: "Title3",
      location: "Segamat, Johor.",
      review: "review",
      road_length: 2,
      road_time: 15,
    },
  ],
}: Props) => {
  return (
    <section className="py-4 flex flex-col gap-4">
      <h3 className="px-4 text-base font-bold">{title}</h3>
      <Carousel className="w-full max-w-[100vw] [&>div]:px-4">
        <CarouselContent className="[&>div]:basis-auto ">
          {data.map((item: any, index: number) => (
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
