import RoadBackButton from "../(road-components)/RoadBackButton";
import RoadBotNavbar from "../(road-components)/RoadBotNavbar";
import RoadDrawer from "../(road-components)/RoadDrawer";

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
