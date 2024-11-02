import RoadBackButton from "../(road-components)/RoadBackButton";
import RoadBotNavbar from "../(road-components)/RoadBotNavbar";
import RoadDrawer from "../(road-components)/RoadDrawer";

type Props = {};

const RoadPage = (props: Props) => {
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
