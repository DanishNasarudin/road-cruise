import RoadBackButton from "@/components/road/RoadBackButton";
import RoadBotNavbar from "@/components/road/RoadBotNavbar";
import RoadDrawer from "@/components/road/RoadDrawer";

type Props = {
  params: Promise<{ id: string }>;
};

const RoadPage = ({ params }: Props) => {
  // Will return road details by id, no need function, can direct here -----

  return (
    <main className="relative">
      <img src="https://placehold.co/720x1280" alt="bg" />
      <RoadBackButton />
      <RoadBotNavbar />
      <RoadDrawer />
    </main>
  );
};

export default RoadPage;
