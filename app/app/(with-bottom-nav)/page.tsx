import AppTopNavbar from "@/components/app/AppTopNavbar";
import CarouselSection from "@/components/app/CarouselSection";
import SearchBar from "@/components/app/SearchBar";
import { cn } from "@/lib/utils";

const MainApp = async () => {
  return (
    <main className="relative">
      <AppTopNavbar />
      <img
        src={"https://placehold.co/600x400"}
        alt={"bg"}
        className={cn("absolute top-0 z-[-1]")}
      />
      <section className="h-min bg-white absolute z-[0] w-full top-[240px] rounded-t-3xl py-4 flex flex-col gap-4">
        <SearchBar />
        <CarouselSection title={"Best Road Nearby."} />
        <CarouselSection title={"Featured Road in KL."} />
        <div className="h-[200px]" />
      </section>
    </main>
  );
};

export default MainApp;
