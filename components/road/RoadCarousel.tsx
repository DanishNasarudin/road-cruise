import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Props = {
  images?: string[];
};

const RoadCarousel = ({
  images = [
    "https://placehold.co/1280x720",
    "https://placehold.co/1280x720",
    "https://placehold.co/1280x720",
  ],
}: Props) => {
  return (
    <section className="py-4 flex flex-col gap-4">
      <Carousel className="w-full max-w-[100vw] [&>div]:px-6">
        <CarouselContent className="[&>div]:basis-auto">
          {images.map((item: string, index: number) => (
            <CarouselItem key={index} className="max-h-[200px] w-[300px] ">
              <img
                src={item}
                alt="carousel-img"
                className="w-full rounded-xl overflow-hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default RoadCarousel;
