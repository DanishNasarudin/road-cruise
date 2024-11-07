import RoadBackButton from "@/components/road/RoadBackButton";
import RoadBotNavbar from "@/components/road/RoadBotNavbar";
import RoadDrawer from "@/components/road/RoadDrawer";
// import RoadMap from "@/components/road/RoadMap";
import dynamic from "next/dynamic";

const RoadMap = dynamic(() => import("@/components/road/RoadMap"), {
  ssr: false,
});

type Props = {
  params: Promise<{ id: string }>;
};

const RoadPage = ({ params }: Props) => {
  // Will return road details by id, no need function, can direct here -----

  return (
    <main className="relative w-screen h-screen">
      {/* <img src="https://placehold.co/720x1280" alt="bg" /> */}
      <RoadMap />
      <RoadBackButton />
      <RoadBotNavbar />
      <RoadDrawer />
    </main>
  );
};

export default RoadPage;
