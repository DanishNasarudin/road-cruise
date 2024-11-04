import RoadBackButton from "@/components/road/RoadBackButton";
import RoadBotNavbar from "@/components/road/RoadBotNavbar";
import RoadDrawer from "@/components/road/RoadDrawer";

const RoadPage = () => {
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
